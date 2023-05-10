import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import { useState } from 'react';
import DashBoard from './users/DashBoard';
import BarChart from './users/BarChart';
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={`App ${showModal ? "blur" : ""}`}>
      <Router>
           <Navbar></Navbar>
           <Routes>
              <Route exact path='/' element={<Home showModal={showModal} setShowModal={setShowModal}/>}/>
              <Route exact path='/adduser' element={<AddUser/>}/>
              <Route exact path='/edituser/:id' element={<EditUser/>}/>
              <Route exact path='/viewuser/:id' element={<ViewUser/>}/>
              <Route exact path='/dashboard' element={<BarChart/>}/>
           </Routes>
      </Router>

    </div>
  );
}

export default App;
