import React, { lazy, Suspense, useState } from 'react';

const Now = lazy(() => import('./Now'));

const App = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <button onClick={handleClick}>Click</button>
      {open && <Now />}
    </Suspense>
  );
};

export default App;
