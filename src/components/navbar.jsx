import { Background, comment, Red } from "../helpers/color"; //import dracula pallet
import { Link } from "react-router-dom";
import Sbox from "./contact/searchbox";
import { useLocation } from "react-router-dom";
const Navbar = ({getquery,contctSerach }) => {
    const locaion=useLocation()
    return (
        <nav className="navbar bg-body-tertiary container-fluid  sticky-top" style={{ backgroundColor: Background, height: "60px" }}>
            <div className="row">
                <div className="col">
                    <a  className="navbar-brand" style={{ color: comment }}><img style={{height:"42px"}} src={require("../asssets/Phonebook_Lineal-coloured.png")}></img>{" "}وب اپلیکیشن مدیریت مخاطبین</a>
                </div>
                {locaion.pathname === "/contacts" ?(<div className="col">
                    <Sbox getquery={getquery} contctSerach={contctSerach}/>
                </div>):null}
                
                <div className="col mt-1" >
                    <Link to={"/contacts/add"} style={{ textDecoration: "none" }} className="btn btn-outline-success">
                        افزودن مخاطب جدید <span class="badge text-bg"><i class="fa-solid fa-plus fa-bounce" style={{ fontSize: "16px", color: Red }}></i></span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;