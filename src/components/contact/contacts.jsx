import { comment, Red, Background, Orange } from "../../helpers/color";
import Contact from "./contact";
import Spinner from "../spinner";

const Contacts = ({ state, getloader }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button type="button" style={{ backgroundColor: Background, color: comment }}>
                            افزودن مخاطب جدید <span class="badge text-bg" style={{ color: Red }}><i class="bi bi-plus-lg" style={{ fontSize: "larger" }}></i></span>
                        </button>
                    </div>
                </div>
            </div>
            {
                getloader ? <Spinner /> :
                    <div className="container mt-4">
                        <div className="row  justify-content-around">
                                {state.length > 0 ? state.map(s => (
                                    <Contact key={s.id} contact={s}/>
                                )) :
                                    <>
                                        <div class="alert alert-warning alert-dismissible fade show" role="alert" style={{ backgroundColor: Orange }}>
                                            <strong style={{ color: Red }}>متاسفانه</strong> مخاطب یافت نشد !
                                            {"    "}
                                            <i class="fa-solid fa-magnifying-glass fa-beat-fade"></i>
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                        <div>
                                        <img className="w-180" src={require("../../asssets/notfound.gif")} />
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