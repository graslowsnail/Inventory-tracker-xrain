//import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//might need Navigate look into that 

import MainNavigation from './shared/Header/MainNavigation';
import NewPart from './parts/pages/NewPart';
import Part from './parts/pages/Parts';
import WorkDay from './workDays/pages/WorkDay';
import NewWorkDay from './workDays/pages/NewWorkDay';
import UpdatePart from './parts/pages/UpdatePart';
import SingleWorkDay from './workDays/pages/singleWorkDay';

const App = () => {

  return ( 
    <Router>
          <MainNavigation />
      <main>
          <Routes>
              <Route path="/" element={<WorkDay/>}/>
              <Route exact path='/new/workday' element={<NewWorkDay/>} />
              <Route exact path='/workday/:workDayId' element={<SingleWorkDay/>} />
              <Route path="/parts" element={<Part/>}/>
              <Route exact path='/new/parts' element={<NewPart/>} />
              <Route exact path='/parts/:partId' element={<UpdatePart/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
