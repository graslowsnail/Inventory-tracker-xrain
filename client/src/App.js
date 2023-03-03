// imports 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// page imports
import Dashboard from './pages/Dashboard.js';

//component imports 
import Header from './components/Header';

function App() {
  return (
      <Router>
      <div>
      <Header></Header>
      <div className='container'>
      <Routes>
      <Route path='/' element={<Dashboard />}/>
      </Routes>
      </div>
      </div>
      </Router>
  );
}

/*
<div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-green-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-green-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
    */


/*
      <Header></Header>
      <div class='grid grid-cols-3 gap-4'>
      <Inventory></Inventory>
    <Note></Note>
      </div>
    */


export default App;
