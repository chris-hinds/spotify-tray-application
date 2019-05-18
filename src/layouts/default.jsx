import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;

const DefaultLayout = ({ children }) => <Wrapper>{children}</Wrapper>;

export default DefaultLayout;
