import './App.scss';

import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('views/Home'))
const NotFound = lazy(() => import('views/NotFound'))

function App() {
  return (
    <div className="App">      
      <Switch>
        <Route exact path='/'>
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </Route>
        <Route exact path='/not-found'>
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        </Route>
        <Redirect from='*' to='/not-found' />
      </Switch>
    </div>
  );
}

export default App;
