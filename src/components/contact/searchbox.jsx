import { useContext } from "react";
import { Contactcontext } from "../../context/contactcontext";
const Sbox = () => {
  const { getquery, contctSerach } = useContext(Contactcontext)
  return (
    <form className="d-flex mt-1" role="search">
      <button
        className="btn btn-success"
        type="submit">
        <i class="bi bi-search"></i>
      </button>
      <input className="form-control me-2"
        type="search" placeholder="جستجو"
        aria-label="Search" dir="rtl"
        value={getquery.text} onChange={contctSerach}
      />
    </form>
  )
}
export default Sbox;