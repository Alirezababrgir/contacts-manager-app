import { Link } from "react-router-dom";
import { Purple, Red, Orange, Green } from "../../helpers/color";
const contact = ({ contact, deleteconfirm }) => {//contact card
    return (
        <div class="card p-1 mt-4" style={{ border: "1px solid purple" }}  >
            <img src={contact.photo} className="card-img-top" alt="" style={{ opacity: "90%" }} />
            <div className="card-body">
                <Link to={`/contacts/${contact.id}`} type="button" class="btn "><i class="bi bi-eye-fill" style={{ color: Purple }} title="جزییات بیشتر"></i></Link>{" "}
                <Link to={`/contacts/edit/${contact.id}`} type="button" class="btn"><i class="bi bi-pen-fill" style={{ color: Orange }} title="ویرایش"></i></Link>{" "}
                <button onClick={deleteconfirm} type="button" class="btn "><i class="bi bi-trash-fill" style={{ color: Red }} title="حذف شود"></i></button>{" "}
                <hr style={{ backgroundColor: "black", height: "1px" }} />
                <h5 className="card-title mx-2"><i style={{ color: "green" }} className="bi bi-person-check">{"  "}</i><span style={{ color: Green }}>مشخصات مخاطب</span></h5>
                <ul>
                    <li class="list-group-item ist-group-item  d-flex justify-content-between align-items-start ">نام و نام خانوادگی :<span> {contact.fullname}</span> </li>
                    <li class="list-group-item ist-group-item  d-flex justify-content-between align-items-start"> ایمیل :<span>{contact.email}</span></li>
                    <li class="list-group-item ist-group-item  d-flex justify-content-between align-items-start">میزان تحصیلات :<span>{contact.job}</span></li>
                </ul>
                <hr style={{ backgroundColor: "black", height: "1px" }} />

                <a href="#" className="btn btn-outline-success mt-1">{contact.mobile}:{" "}<i class="bi bi-telephone-outbound" style={{ color: Red }}></i></a>
            </div>
        </div>
    )
}
export default contact;