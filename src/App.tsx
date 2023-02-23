import React, { Suspense, lazy } from 'react';

import { Router } from './Core/Router/Router';
import { Route } from './Core/Router/Route';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IRoutes } from './Shared/interfaces/IRoutes';

library.add(fab, fas);

//Application lazyLoading
const lazyHomePage: React.LazyExoticComponent<() => JSX.Element> = lazy(() =>
  import('./Modules/Home/Home')
    .then(({ Home }) => ({ default: Home })),
);
const lazyNotFoundPage: React.LazyExoticComponent<() => JSX.Element> = lazy(() => 
  import('./Modules/NotFound/NotFound')
    .then(({ NotFound }) => ({ default: NotFound })), 
);
const lazySearchPage: React.LazyExoticComponent<({ routeParams }: any) => JSX.Element> = lazy(() => 
  import('./Modules/Search/Search')
    .then(({ Search }) => ({ default: Search })), 
);

const appRoutes: IRoutes[] = [
  {
    path: '/search/:query',
    Component: lazySearchPage,
  }
]

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={ lazyNotFoundPage }>
          <Route path='/' Component={ lazyHomePage }/>
          <Route path='/home' Component={ lazyHomePage }/>
        </Router>
      </Suspense>
    </main>
  );
  
}

export default App;
