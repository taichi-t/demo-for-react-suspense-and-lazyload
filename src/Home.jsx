import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <div>Home page</div>
    <Link to="/about">Link to Time page</Link>
  </>
);

export default Home;
