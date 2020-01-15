import React from 'react';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
   font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const Layout = (props) => {
  const { children} = props
  return (
    <>
       <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          * + * {
            margin-top: 1rem;
          }
          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 18px;
            line-height: 1.4;
            > div {
              margin-top: 0;
            }
          }
        `}
      />
      <header
        css={css`
          background: #eee;
          border-bottom: 1px solid #ddd;
          display: flex;
          justify-content: space-between;
          padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      `}>
        <NavLink to="/" fontWeight="bold">
          Gatsby MDX starter
        </NavLink>
      </header>
      <main
        css={css`
          margin: 2rem auto;
          max-width: 550px;
        `}>{children}</main>
    </>
  )
}

export default Layout;