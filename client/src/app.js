import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';

import MainNavigation from './shared/Header/MainNavigation';
import NewPart from './parts/pages/NewPart';
import Part from './parts/pages/Parts';

const App = () => {

  return ( 
    <Router>
    <Fragment>
      <MainNavigation />
      <main>
          <Routes>
            <Route exact path='/parts' element={<Part/>} />
          </Routes>
      </main>
    </Fragment>
    </Router>
  );
};

export default App;

/*
            <Routes>
                <Route path='/' exact>
                </Route>
                <Route path ='/:userId/places' exact >
                </Route>
                <Route path='/places/new' exact>
                </Route>
                <Route path='/places/:placeId'>
                </Route>
                <Route path='/auth'>
                </Route>
                <Navigate to='/' />
            </Routes>
  */
