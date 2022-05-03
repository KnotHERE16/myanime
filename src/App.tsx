import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Lyaout';
import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" >
   <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </article>
      </div>
      </Route>
      </Routes>
    </Layout>
  );
}

export default App;
