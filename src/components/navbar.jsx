import { Background, comment, Red } from "../helpers/color"; //import dracula pallet
import { Link } from "react-router-dom";
import Sbox from "./contact/searchbox";
import { useLocation } from "react-router-dom";
const Navbar = () => {
    const locaion = useLocation();
    return (
        <nav className="navbar bg-body-tertiary container-fluid  sticky-top" style={{ backgroundColor: Background, height: "60px" }}>
            <div className="row">
                <div className="col">
                    <a className="navbar-brand" style={{ color: comment }}><img style={{ height: "42px" }} src={require("../asssets/Phonebook_Lineal-coloured.png")}></img>{" "}وب اپلیکیشن مدیریت مخاطبین</a>
                </div>
                {locaion.pathname === "/contacts" ? (<div className="col">
                    <Sbox />
                </div>) : null}
                {locaion.pathname === "/contacts" ? (
                    <div className="col mt-1" >
                        <Link to={"/contacts/add"} style={{ boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",textDecoration:"none" }}
                            className="btn btn-outline-success">
                            افزودن مخاطب جدید <span class="badge text-bg"><i class="fa-solid fa-plus fa-bounce" style={{ fontSize: "16px", color: Red }}></i></span>
                        </Link>
                    </div>
                ) : null}


            </div>
        </nav>
    )
}
export default Navbar;