import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/base/Layout';
import Main from './pages/Main';

function App() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}

export default App;
