import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//might need Navigate look into that 
//

import MainNavigation from './shared/Header/MainNavigation';
import NewPart from './parts/pages/NewPart';
import Part from './parts/pages/Parts';
import WorkDay from './workDays/pages/WorkDay';
import NewWorkDay from './workDays/pages/NewWorkDay';
import UpdatePart from './parts/pages/UpdatePart';

const App = () => {

  return ( 
    <Router>
    <Fragment>
      <MainNavigation />
      <main>
          <Routes>
            <Route exact path='/' element={<WorkDay/>} />
          </Routes>
          <Routes>
            <Route exact path='/parts' element={<Part/>} />
          </Routes>
          <Routes>
            <Route exact path='/new/parts' element={<NewPart/>} />
          </Routes>
          <Routes>
              <Route exact path='/parts/:partId' element={<UpdatePart/>} />
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

