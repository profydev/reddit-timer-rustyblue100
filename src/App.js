import React from 'react';
import 'normalize.css';

import { useRoutes } from 'react-router-dom';
import Search from './components/Search';
import Header from './components/Header';

function Home() {
  return (
    <>
      <Header />
    </>
  );
}

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'search', element: <Search /> },
  ]);

  return routes;
}

export default App;
