import { Purple,Background,comment } from "../../helpers/color";
const Sbox = () => {
    return (
        <form className="d-flex" role="search" dir="ltr">
            <input className="form-control me-2" type="search" placeholder="جستجوی مخطب " aria-label="Search" />
            <button className="btn btn-primary" type="submit"><i class="bi bi-search"></i></button>
        </form>
    )
}
export default Sbox;