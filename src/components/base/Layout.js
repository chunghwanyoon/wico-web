import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div`
  color: #212529;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div.contents-wrapper {
    @media (min-width: 768px) {
      width: 60%;
    }
  }

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
      <div className="contents-wrapper">
        <Header />
        <div className="contents">{children}</div>
        <Footer />
      </div>
    </LayoutContainer>
  );
});

export default Layout;
