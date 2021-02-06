import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import About from './About';
// import Home from './Home';

const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
