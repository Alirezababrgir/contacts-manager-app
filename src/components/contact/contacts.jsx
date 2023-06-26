import { comment, Red, Background } from "../../helpers/color";
import Contact from "./contact";

const Contacts = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button type="button" style={{ backgroundColor: Background, color: comment }}>
                            افزودن مخاطب جدید <span class="badge text-bg" style={{ color: Red }}><i class="bi bi-plus-lg" style={{fontSize:"larger"}}></i></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-aitem-center">
                    <div className="col col-md-4">
                        <Contact/>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Contacts;