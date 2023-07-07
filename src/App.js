import './App.css';
import Contacts from './components/contact/contacts';
import Navbar from './components/navbar';
import Addcon from './components/contact/addcontact';
import { useState } from 'react';
import Viewcon from './components/contact/viewcontact'
import Editcon from './components/contact/editcontact'
import { Route,Routes,Navigate } from 'react-router-dom';


//import { Fragment } from 'react';
function App() {
  const [getstate,setstate]=useState([]);
  const [getloader,setloader]=useState([false]);
  return (
    <div className='App'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to={"/contacts"}/>}/>
          <Route path='/contacts' element={<Contacts state={getstate} getloader={getloader}/>}/>
          <Route path='/contacts/add' element={<Addcon/>}/>
          <Route path='/contacts/:contactID' element={<Viewcon/>}/>
          <Route path='/contacts/edit/:contactID' element={<Editcon/>}/>

        </Routes>
    </div>

   
  );
}
export default App;
