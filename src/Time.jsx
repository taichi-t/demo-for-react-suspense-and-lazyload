import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Time = () => {
  const now = moment().format('YYYY-MM-DD');
  return (
    <>
      <div>{now}です。</div>
      <Link to="/">Link to Home page</Link>
    </>
  );
};

export default Time;
