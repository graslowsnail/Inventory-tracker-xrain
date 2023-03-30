import React from 'react';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';

import MainNavigation from './shared/Header/MainNavigation';

const App = () => {

    return ( 
        <Router>
        <MainNavigation />
        <main>
        </main>
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
