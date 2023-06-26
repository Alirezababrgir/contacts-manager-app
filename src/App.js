import './App.css';
import Contacts from './components/contact/contacts';
import Navbar from './components/navbar';
import { useState } from 'react';

//import { Fragment } from 'react';
function App() {
  const [getstate,setstate]=useState([]);
  return (
    <div className='App'>
        <Navbar/>
        <Contacts state={getstate}/>
    </div>

   
  );
}
export default App;
