import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import React from 'react'
import PostPreview from './PostPreview'
import { css } from '@emotion/core';
const appId = process.env.GATSBY_ALGOLIA_APP_ID;
const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY
const searchClient = algoliasearch(appId, searchKey);

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}>
    <SearchBox />
    <Hits hitComponent={PostPreview} css={css`
    li {
      list-style: none;
    }
    `} />
  </InstantSearch>
);


export default Search;