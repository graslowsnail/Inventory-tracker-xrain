import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';

import MainNavigation from './shared/Header/MainNavigation';
import NewPart from './parts/pages/NewPart';
import Part from './parts/pages/Parts';
import WorkDay from './workDays/pages/WorkDay';
import NewWorkDay from './workDays/pages/NewWorkDay';

const App = () => {

  return ( 
    <Router>
    <Fragment>
      <MainNavigation />
      <main>
          <Routes>
            <Route exact path='/parts' element={<Part/>} />
          </Routes>
          <Routes>
            <Route exact path='/new/parts' element={<NewPart/>} />
          </Routes>
          <Routes>
            <Route exact path='/' element={<WorkDay/>} />
          </Routes>
          <Routes>
            <Route exact path='/new/workday' element={<NewWorkDay/>} />
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
