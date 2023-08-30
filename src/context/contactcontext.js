import { createContext } from "react";

export const Contactcontext=createContext({
    getloader:false,
    setloader:()=>{},
    getstate:[],
    setstate:()=>{},
    getaddContact:{},
    setaddContact:()=>{},
    getgroup:[],
    setgroup:()=>{},
    getquery:{},
    setquery:()=>{},
    forceRender:false,
    getFilteredContacts:[],
    setFilteredContacts:()=>{},
    contctSerach:()=>{},
    Delet:()=>{},
    deleteconfirm:()=>{},
    sendformdata:()=>{},
})