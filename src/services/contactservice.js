import axios from "axios";                             //impport axios rom axios

const SERVER_URL = 'http://localhost:9000';           //SERVER ADDRESS SAVING

export const Allcontacts = () => {
    const url = `${SERVER_URL}/contacts`;              //GET ALL CONTACTS ON SERVER JSON
    return axios.get(url);
}


export const Allgroups = () => {
    const url = `${SERVER_URL}/groups`;                //GET ALL GROUPS ON SERVER JSON
    return axios.get(url);
}



export const GETcontact = (contactID) => {
    const url = `${SERVER_URL}/contacts/${contactID}`; //GET UNIC CONTACT BY CONTACTID ON SERVER JSON
    return axios.get(url);
}



export const GETgroup = (groupID) => {
    const url = `${SERVER_URL}/groups/${groupID}`;    //GET UNIC GROUP BY GROUPID ON SERVER JSON
    return axios.get(url);
}



export const Createcontact = (contact) => {
    const url = `${SERVER_URL}/contacts/`;            //CREAATE NEW CONTACT BY POST METHOD ON SERVER JSON
    return axios.post(url, contact);
}





export const UPDATEcontact = (contactID, contact) => {
    const url = `${SERVER_URL}/contacts/${contactID}`;//UPDATE(PUT) UNIC CONTACT BY CONTACTID ON SERVER JSON
    return axios.put(url, contact);
}


export const DELETcontact = (contactID) => {
    const url = `${SERVER_URL}/contacts/${contactID}`;//DELETE(delete) UNIC CONTACT BY CONTACTID ON SERVER JSON
    return axios.delete(url);
}