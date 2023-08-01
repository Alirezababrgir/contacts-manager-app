import { Link } from "react-router-dom";
import { Purple, Red, Orange } from "../../helpers/color";
const contact = ({ contact }) => {//contact card
    return (
        <div class="card mt-4n p-1 mt-4" style={{ border: "1px solid purple"}} >
            <img src={contact.photo} class="card-img-top" alt="" style={{ opacity: "90%" }} />
            <div class="card-body">
                <Link to={`/contacts/edit/${contact.id}`} type="button" class="btn"><i class="bi bi-pen-fill" style={{ color: Orange }} title="ویرایش"></i></Link>{" "}
                <Link type="button" class="btn "><i class="bi bi-trash-fill" style={{ color: Red }} title="حذف"></i></Link>{" "}
                <Link to={`/contacts/${contact.id}`} type="button" class="btn "><i class="bi bi-eye-fill" style={{ color: Purple }} title="جزییات بیشتر"></i></Link>{" "}
                <h5 class="card-title"><i class="bi bi-person-check">{" "}</i>مشخصات مخاطب</h5>
                <ul>
                    <li class="list-group-item ist-group-item  d-flex justify-content-between align-items-start ">نام و نام خانوادگی :<span> {contact.fullname}</span> </li>
                    <li class="list-group-item ist-group-item  d-flex justify-content-between align-items-start"> ایمیل :<span>{contact.email}</span></li>
                    <li class="list-group-item ist-group-item  d-flex justify-content-between align-items-start">میزان تحصیلات :<span>{contact.job}</span></li>
                </ul>
                <div class="card-footer">
                    شماره تماس :
                </div>
                <a href="#" class="btn btn-outline-success">{contact.mobile}:{" "}<i class="bi bi-telephone-outbound" style={{ color: Red }}></i></a>
            </div>
        </div>
    )
}
export default contact;