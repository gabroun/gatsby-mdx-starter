import React from 'react';
import Layout from '../components/Layout'
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Search from '../components/Search'
export const query = graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            path
            summary
          }
        }
      }
    }
`;

const Home = ({ data: { allMdx: { nodes: posts }} }) => {

  return (
    <Layout>
      <h1 css={css`
          margin: 2rem auto;
          max-width: 550px;
        `}>Blog posts</h1>
      <Search/>
      {/* {posts.map(post => {
        const { path, title, summary} = post.frontmatter
        return (
          <article
            key={path}
            css={css`
              border-bottom: 1px solid #ddd;
              display: flex;
              margin-top: 0;
              padding-bottom: 1rem;
              :first-of-type {
                margin-top: 1rem;
              }
            `}
          >
            <div>
              <h3 css={css`
                a {
                  text-decoration: none;
                }
              `}><Link to={path}>{title}</Link></h3>
              <p>{summary}</p>
            </div>
          </article>
        )
      })} */}
    </Layout>
  );
}

export default Home;