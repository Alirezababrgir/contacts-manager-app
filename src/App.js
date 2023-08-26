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
import { Allcontacts, Allgroups, Createcontact, DELETcontact } from './services/contactservice';
import { confirmAlert } from 'react-confirm-alert';//import react-confirm-alert frimework
import { Contactcontext } from './context/contactcontext'; //import contextapi



function App() {
  const [getFilteredContacts, setFilteredContacts] = useState([]);
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
  const [getquery, setquery] = useState({ text: "" });

  const usenavigate = useNavigate();

  useEffect(() => {
    async function fetchdata() {
      try {
        setloader(true);
        const { data: contactdat } = await Allcontacts();
        const { data: groupdata } = await Allgroups();
        setstate(contactdat);
        setFilteredContacts(contactdat);
        setgroup(groupdata);
        setloader(false);
      } catch (err) {
        console.log(err.message)

      }

    }
    fetchdata();
  }, [forceRender])



  function setconfiginfo(event) { setaddContact({ ...getaddContact, [event.target.name]: event.target.value }) }

  async function sendformdata(event) {
    event.preventDefault();
    try {
      const { status } = await Createcontact(getaddContact);
      if (status === 201) {
        setaddContact({});
        setForceRender(!forceRender);
        usenavigate("/contacts");
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  const deleteconfirm = (contactID, name) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui' dir='rtl'>
            <h4 className='mb-4'>{name} حذف شود؟</h4>
            <button className='btn btn-danger mx-2 '
              onClick={() => {
                onClose();
                Delet(contactID);
                setForceRender(!forceRender);
              }}
            >
              بله
            </button>
            <button className='btn btn-success mx-2' onClick={onClose}>خیر</button>
          </div>
        );
      }

    })
  }

  const Delet = async (contactID) => {
    try {
      setloader(true);
      const res = await DELETcontact(contactID);
      if (res) {
        const { data: contactsdata } = await Allcontacts();
        setaddContact(contactsdata);
        setloader(false);
      }

    } catch (error) {
      console.log(error.message)
      setloader(false);
    }
  };
  const contctSerach = (event) => {//searching contacts ...
      setquery({ ...getquery, text: event.target.value });
      console.log(event.target.value)
      const allCon = getstate.filter((contact) => {
        return contact.fullname.toLowerCase().includes(event.target.value.toLowerCase());
      });

      let cleartimeout;
      clearTimeout(cleartimeout);
     cleartimeout= setTimeout(() => {  //set Debouncing for search box
        setFilteredContacts(allCon);
      }, 1000);
  };


  return (
    <div className='App'>
      <Contactcontext.Provider value={{
        getaddContact,
        setaddContact,
        getgroup,
        setgroup,
        getloader,
        setloader,
        getquery,
        setquery,
        getFilteredContacts,
        setFilteredContacts,
        getstate,
        setstate,
        forceRender,
        setForceRender,
        setconfiginfo,
        contctSerach,
        deleteconfirm,
        sendformdata
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to={"/contacts"} />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/contacts/add' element={<Addcon />} />
          <Route path='/contacts/:contactID' element={<ViewCon />} />
          <Route path='/contacts/edit/:contactID' element={<Editcon />} />
        </Routes>
      </Contactcontext.Provider>
    </div>
  )
}
export default App;
