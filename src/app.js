//import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import '../src/analytics/pages/Scrollbar.css';
//might need Navigate look into that 

import MainNavigation from './shared/Header/MainNavigation';
import NewPart from './parts/pages/NewPart';
import Part from './parts/pages/Parts';
//import WorkDay from './workDays/pages/WorkDay';
import NewWorkDay from './workDays/pages/NewWorkDay';
import UpdatePart from './parts/pages/UpdatePart';
import SingleWorkDay from './workDays/pages/singleWorkDay';
import PartHistory from './parts/pages/PartsHistory';
import Login from './login/Login.jsx';
import AnalyticsPage from './analytics/pages/SuperAdminPage.js';

const App = () => {

  return ( 
    <Router>
          <MainNavigation />
      <main>
          <Routes>
              {/*workday routes bellow */}
              <Route exact path='/' element={<AnalyticsPage/>}/>
              <Route exact path='/new/workday' element={<NewWorkDay/>} />
              <Route exact path='/workday/:workDayId' element={<SingleWorkDay/>} />
              {/*part routes bellow */}
              <Route exact path="/parts" element={<Part/>}/>
              <Route exact path='/new/parts' element={<NewPart/>} />
              <Route exact path='/parts/:partId' element={<UpdatePart/>} />
              <Route exact path='/parthistory' element={<PartHistory/>} />
              <Route exact path='/login' element={<Login/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
