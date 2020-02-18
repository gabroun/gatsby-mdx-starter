import React from "react"
import { Link } from "gatsby"
import { Highlight } from "react-instantsearch-dom"
import { css } from '@emotion/core';
const PostPreview = ({ hit }) => {

  return (
    <article
      css={css`
              border-bottom: 1px solid #ddd;
              display: flex;
              margin-top: 0;
              padding-bottom: 1rem;
              flex-direction: column;
              :first-of-type {
                margin-top: 1rem;
              }
            `}>
      <h3>
        <Link to={hit.path}>
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </Link>
      </h3>
      <small>{new Date(hit.date).toLocaleDateString()}</small>
      {/* <p>
         <Highlight hit={hit} attribute="excerpt" tagName="mark" />
      </p> */}
    </article>
  );
}

export default PostPreview;