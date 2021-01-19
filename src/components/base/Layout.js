import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div`
  color: #212529;
  background-color: white;
  width: 100%;

  & > div,
  footer,
  header {
  }

  & > .contents {
    min-height: 100vh;
  }
`;

const Layout = withRouter(({ children, location, history }) => {
  return (
    <LayoutContainer>
      <Header />
      <div className="contents">{children}</div>
      <Footer />
    </LayoutContainer>
  );
});

export default Layout;
