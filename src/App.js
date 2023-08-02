import './App.css';
import Contacts from './components/contact/contacts';
import Navbar from './components/navbar';
import Addcon from './components/contact/addcontact';
import ViewCon from './components/contact/viewcontact';
import { useEffect, useState } from 'react';
//import Viewcon from './components/contact/viewcontact'
import Editcon from './components/contact/editcontact'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
//import axios from 'axios';
import { Allcontacts, Allgroups, Createcontact } from './services/contactservice';


//import { Fragment } from 'react';
function App() {
  const [forceRender, setForceRender] = useState(false);
  const [getstate, setstate] = useState([]);
  const [getgroup, setgroup] = useState([]);
  const [getloader, setloader] = useState([false]);
  const [getaddContact, setaddContact] = useState({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  });


  const usenavigate = useNavigate();

  useEffect(() => {
    async function fetchdata() {
      try {
        setloader(true);
        const { data: contactdat } = await Allcontacts();
        const { data: groupdata } = await Allgroups();
        console.log(groupdata)
        console.log(contactdat)
        setstate(contactdat);
        setgroup(groupdata);
        setloader(false);
      } catch (err) {
        console.log(err.message)

      }

    }
    fetchdata();
  }, [])

  function setconfiginfo(event) { setaddContact({ ...getaddContact, [event.target.name]: event.target.value }) }


  useEffect(() => {
    async function fetchdata() {
      try {
        setloader(true);
        const { data: contactdat } = await Allcontacts();
        console.log(contactdat)
        setstate(contactdat);
        setloader(false);
      } catch (err) {
        console.log(err.message)

      }

    }
    fetchdata();
  }, [forceRender])

  async function sendformdata(event) {
    event.preventDefault();
    try {
      const { status } = await Createcontact(getaddContact)

      if (status === 201) {
        setaddContact({});
        setForceRender(!forceRender);
        usenavigate("/contacts");
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/contacts"} />} />
        <Route path='/contacts' element={<Contacts state={getstate} getloader={getloader} />} />
        <Route path='/contacts/add' element={<Addcon loading={getloader} getgroup={getgroup} getaddcontact={getaddContact} setconfiginfo={setconfiginfo} sendformdata={sendformdata} />} />
        <Route path='/contacts/:contactID' element={<ViewCon />} />
        <Route path='/contacts/edit/:contactID' element={<Editcon forceRender={forceRender} setForceRender={setForceRender} />} />

      </Routes>
    </div>


  );
}
export default App;
