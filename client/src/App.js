// imports 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// page imports
import Dashboard from './pages/Dashboard.js';

//component imports 
import Header from './components/Header';

function App() {
  return (
      <Router>
          <Header />
              <Routes>
                  <Route path='/dashboard' element={<Dashboard />}/>
              </Routes>
      </Router>
  );
}

export default App;
