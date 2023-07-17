import './App.css';
import Contacts from './components/contact/contacts';
import Navbar from './components/navbar';
import Addcon from './components/contact/addcontact';
import { useEffect, useState } from 'react';
//import Viewcon from './components/contact/viewcontact'
import Editcon from './components/contact/editcontact'
import { Route, Routes, Navigate } from 'react-router-dom';
//import axios from 'axios';
import Contact from './components/contact/contact';
import { Allcontacts, Allgroups ,Createcontact} from './services/contactservice';


//import { Fragment } from 'react';
function App() {
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

  async function sendformdata(event) {event.preventDefault();
    try{
      const{status}=await Createcontact(getaddContact)
     
     if (status === 201) {
      setaddContact({});
      Navigate("/contacts");
     }
    }catch(err){
console.log(err.message)
    }
  }

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/contacts"} />} />
        <Route path='/contacts' element={<Contacts state={getstate} getloader={getloader} />} />
        <Route path='/contacts/add' element={<Addcon loading={getloader} getgroup={getgroup} getaddcontact={getaddContact} setconfiginfo={setconfiginfo} sendformdata={sendformdata}/>} />
        <Route path='/contacts/:contactID' element={<Contact />} />
        <Route path='/contacts/edit/:contactID' element={<Editcon />} />

      </Routes>
    </div>


  );
}
export default App;
