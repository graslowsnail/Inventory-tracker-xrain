// imports 
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';

import MainNavigation from './components/Header/MainNavigation';
import Users from './user/pages/Users.js';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
          <Routes>
              <Route path='/' exact>
                <Users/>      
              </Route>
              <Navigate to='/' />
          </Routes>
      </main>
        
    </Router>
  );
}

export default App;
