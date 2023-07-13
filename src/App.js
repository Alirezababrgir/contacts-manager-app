import './App.css';
import Contacts from './components/contact/contacts';
import Navbar from './components/navbar';
import Addcon from './components/contact/addcontact';
import { useEffect, useState } from 'react';
import Viewcon from './components/contact/viewcontact'
import Editcon from './components/contact/editcontact'
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';

//import { Fragment } from 'react';
function App() {
  const [getstate, setstate] = useState([]);
  const [getgroup, setgroup] = useState([]);
  const [getloader, setloader] = useState([false]);

  useEffect(() => {
    async function fetchdata() {
      try{
        setloader(true);
        const {data:contactdat}=await axios.get('http://localhost:9000/contacts');
        const {data:groupdata}=await axios.get('http://localhost:9000/groups');
        console.log(groupdata)
        getstate(contactdat);
        getgroup(groupdata);
        setloader(false);
      }catch(err){
        console.log(err.message)

      }

    }
    fetchdata();
  }, [])
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/contacts"} />} />
        <Route path='/contacts' element={<Contacts state={getstate} getloader={getloader} />} />
        <Route path='/contacts/add' element={<Addcon />} />
        <Route path='/contacts/:contactID' element={<Viewcon />} />
        <Route path='/contacts/edit/:contactID' element={<Editcon />} />

      </Routes>
    </div>


  );
}
export default App;
