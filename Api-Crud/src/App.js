import './App.css';
import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import StudentData from './StudentData';
import Home from './Home';
import Login from './Login';
import Createuser from './CreateUser';
import StudentEdit from './StudentEdit';
import StudentDetail from './StudentDetail';


function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='createuser' element={<Createuser />} />
          <Route path='studentdata' element={<StudentData />} />
          <Route path={"studentedit/:studentid"} element={<StudentEdit />} />
          <Route path={"studentdetail/:studentid"} element={<StudentDetail />} />
          </Route>

        </Routes>
      </BrowserRouter>
      </>
     );
}

export default App;
