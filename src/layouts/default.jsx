import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px 0;
`;

const DefaultLayout = ({ children }) => <Wrapper>{children}</Wrapper>;

export default DefaultLayout;

// background: #ee0979; /* fallback for old browsers */
//   background: -webkit-linear-gradient(
//     to top,
//     #ff6a00,
//     #ee0979
//   ); /* Chrome 10-25, Safari 5.1-6 */
//   background: linear-gradient(
//     to top,
//     #ff6a00,
//     #ee0979
//   ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
