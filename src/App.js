import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/base/Layout';
import Main from './pages/Main';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Main />
      </Layout>
    </>
  );
}

export default App;
