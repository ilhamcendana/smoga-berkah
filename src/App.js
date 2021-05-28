import './App.scss';

import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('views/Home'))

function App() {
  return (
    <div className="App">      
      <Switch>
        <Route exact path='/'>
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
