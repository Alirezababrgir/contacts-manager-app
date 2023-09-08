import './App.css';
import Contacts from './components/contact/contacts';
import Navbar from './components/navbar';
import Addcon from './components/contact/addcontact';
import ViewCon from './components/contact/viewcontact';
import { useEffect } from 'react';
//import Viewcon from './components/contact/viewcontact'
import Editcon from './components/contact/editcontact'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
//import axios from 'axios';
import { Allcontacts, Allgroups, Createcontact, DELETcontact } from './services/contactservice';
import { confirmAlert } from 'react-confirm-alert';//import react-confirm-alert frimework
import { Contactcontext } from './context/contactcontext'; //import contextapi
//import _ from 'lodash';   //import lodash frimework
import { useImmer } from 'use-immer';
import { toast, ToastContainer } from 'react-toastify';//import react-toastify functions



function App() {
  const [getFilteredContacts, setFilteredContacts] = useImmer([]);
  const [forceRender, setForceRender] = useImmer(false);
  const [getstate, setstate] = useImmer([]);
  const [getgroup, setgroup] = useImmer([]);
  const [getloader, setloader] = useImmer([false]);
  const [getaddContact, setaddContact] = useImmer({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  });
  const [getquery, setquery] = useImmer({ text: "" });

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
  }, [forceRender]);

  async function sendformdata(values) {
    try {
      const { status } = await Createcontact(values);
      if (status === 201) {
        toast.success('مخاطب با موفقیت اضافه شد !');
        usenavigate("/contacts");
        setForceRender(!forceRender);
      }
    } catch (err) {
      console.log(err)
      setForceRender(!forceRender);
    }
  }

  const deleteconfirm = (contactID, name) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui' dir='rtl'>
            <h4 className='mb-4'>{name} حذف شود؟</h4>
            <button className='btn btn-danger mx-2 ' style={{ boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}
              onClick={() => {
                onClose();
                Delet(contactID);
                setForceRender(!forceRender);
              }}
            >
              بله
            </button>
            <button className='btn btn-success mx-2' onClick={onClose} style={{ boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}
            >خیر</button>
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
        toast.success('مخاطب با موفقیت حذف شد !');
        setaddContact(contactsdata);
        setloader(false);
      }

    } catch (error) {
      console.log(error.message)
      setloader(false);
    }
  };

  const contctSerach = (event) => {//searching contacts ...
    setquery(draft => { draft.text = event.target.value });
    const allCon = getstate.filter((contact) => {
      return contact.fullname.toLowerCase().includes(event.target.value.toLowerCase());
    });
    let claertimeout;
    clearTimeout(claertimeout);
    claertimeout = setTimeout(() => {
      setFilteredContacts(allCon);
    }, 1000);
    //_.debounce( setFilteredContacts(allCon),1000)
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
        contctSerach,
        deleteconfirm,
        sendformdata,
      }}>
        <ToastContainer
          position="bottom-right"
          autoClose={7000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/contacts"} />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/contacts/add' element={<Addcon />} />
        <Route path='/contacts/:contactID' element={<ViewCon />} />
        <Route path='/contacts/edit/:contactID' element={<Editcon />} />
      </Routes>
    </Contactcontext.Provider>
    </div >
  )
}
export default App;
