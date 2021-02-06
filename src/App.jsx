import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Time from './Time';
import Home from './Home';

// const Time = lazy(() => import('./Time'));
// const Home = lazy(() => import('./Home'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Time} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
