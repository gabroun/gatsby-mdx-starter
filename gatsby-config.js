require('dotenv').config();

const blogQuery = `
  {
   posts: allMdx(
    filter: { fileAbsolutePath: { regex: "/posts/" } }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          date
          path
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
  }
`;

const settings = { attributesToSnippet: [`excerpt:20`] };
const queries = [
  {
    query: blogQuery,
    transformer: ({ data }) => data.posts.edges.map(({node: {frontmatter, ...rest}}) => {
      return {
        ...frontmatter,
        ...rest
      }
    }),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings,
  },
];

module.exports = {
  plugins: [
      {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
     'gatsby-plugin-emotion',
     {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
  ]
}