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
import { Allcontacts, Allgroups, Createcontact, DELETcontact} from './services/contactservice';
import { confirmAlert } from 'react-confirm-alert';//import react-confirm-alert frimework


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
  const [getquery, setquery] = useState({ text: "" });
  const [getFilteredContacts, setFilteredContacts] = useState([]);


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

  const confirm = (contactID, name) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui' dir='rtl'>
            <h4 className='mb-4'>مخاطب{name} حذف شود ؟</h4>
            <button className='btn btn-danger mx-2'
              onClick={() => {
                onClose();
                Delet(contactID);
                setForceRender(!forceRender)
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
  }

  const contctSerach = (event) => {
    setquery({ ...getquery, text: event.target.value });
    const allCon = getstate.filter((contact)=>{
      return contact.fullname
      .toLowerCase()
      .includes(event.target.value.toLowerCase());
    });
    setFilteredContacts(allCon);
  };
  


  return (
    <div className='App'>
      <Navbar getquery={getquery} contctSerach={contctSerach}/>
      <Routes>
        <Route path="/" element={<Navigate to={"/contacts"} />} />
        <Route path='/contacts' element={<Contacts state={getstate} getloader={getloader} deleteconfirm={confirm} />} />
        <Route path='/contacts/add' element={<Addcon loading={getloader} getgroup={getgroup} getaddcontact={getaddContact} setconfiginfo={setconfiginfo} sendformdata={sendformdata} />} />
        <Route path='/contacts/:contactID' element={<ViewCon />} />
        <Route path='/contacts/edit/:contactID' element={<Editcon forceRender={forceRender} setForceRender={setForceRender} />} />
      </Routes>
    </div>


  );
}
export default App;
