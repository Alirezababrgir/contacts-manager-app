//import { Link } from "react-router-dom";
import { Red, Orange, Green } from "../../helpers/color";
import Contact from "./contact";
import Spinner from "../spinner";

const Contacts = ({ state, getloader }) => {
    return (
        <>

<div style={{height: "100px", overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path  d="M-169.58,186.03 C-51.63,39.97 283.57,-22.19 573.08,13.33 L504.79,-26.13 L-47.68,-50.80 Z" style={{stroke: "none", fill: "#282a36"}}></path></svg></div>
            {
                getloader ? <Spinner /> :
                    <div className="container mt-4">
                        <div className="row  justify-content-around">
                            {state.length > 0 ? state.map(s => (
                                <Contact key={s.id} contact={s} />
                            )) :
                                <>
                                    <div class="alert alert-warning alert-dismissible fade show" role="alert" style={{ backgroundColor: Orange }}>
                                        <strong style={{ color: Red }}>متاسفانه</strong> مخاطب یافت نشد !
                                        {"    "}
                                        <i class="fa-solid fa-magnifying-glass fa-beat-fade"></i>
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div>
                                        <img className="w-180" src={require("../../asssets/404 Error_Lineal-coloured.png")} />
                                    </div>
                                </>
                            }
                        </div>
                    </div>

            }


        </>
    )
}
export default Contacts;