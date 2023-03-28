// imports 
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';

import Header from './components/Header';
import Users from './user/pages/Users.js';

function App() {
  return (
    <Router>
      <Header />
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
