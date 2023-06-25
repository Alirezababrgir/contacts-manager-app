import Sbox from "./contact/searchbox";
const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a className="navbar-brand">لیست مخاطبین</a>
                    </div>
                    <div className="col">
                        <Sbox/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;