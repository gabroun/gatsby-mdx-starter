import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
const Header = () => {
  return (
    <nav css={css`
        margin-top: 0;
    `}>
      <ul css={css`
        display: grid;
        margin-top: 0;
        list-style: none;
        padding: 0;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
      `}>
        <li css={css`
          margin-top: 0;
        `}>
           <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li css={css`
          margin-top: 0;
        `}>
           <Link to="/blog" activeClassName="active">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;