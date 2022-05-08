import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/manga/:status" element={<HomePage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<Navigate to="/" replace/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
