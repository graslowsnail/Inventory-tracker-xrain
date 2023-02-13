
// component imports
import Inventory from '../components/Inventory';
import Note from '../components/Notes';
//import 


const Dashboard = () => {
    
    return (
    <main>
    <div>
      <div class='grid grid-cols-3 gap-4'>
      <Inventory></Inventory>
    <Note></Note>
      </div>
      </div>
        </main>
    );
};


export default Dashboard;



