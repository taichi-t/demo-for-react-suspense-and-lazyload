import React from 'react';
import moment from 'moment';

const Now = () => {
  const now = moment().format('YYYY-MM-DD');
  return <p>今日は{now}です。</p>;
};

export default Now;
