import { Background, comment ,Red} from "../helpers/color"; //import dracula pallet
import Sbox from "./contact/searchbox";
const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary container-fluid" style={{ backgroundColor: Background }}>
            <div className="row">
                <div className="col">
                    <a className="navbar-brand" style={{ color: comment }}> <i class="bi bi-person-lines-fill" style={{color:Red}}></i>{" "}وب ابلیکیشن مدیریت مخاطبین</a>
                </div>
                <div className="col">
                    <Sbox />
                </div>
            </div>
        </nav>
    )
}
export default Navbar;