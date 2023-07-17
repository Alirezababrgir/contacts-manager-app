import { Purple, Red, Orange } from "../../helpers/color";
const contact = ({contact}) => {//contact card
    return (
        <div class="card mt-4" >
            <img src={contact.photo} class="card-img-top" alt="..." />
            <div class="card-body">
                    <button type="button" class="btn"><i class="bi bi-pen-fill"  style={{ color: Orange }}title="ویرایش"></i></button>{" "}
                    <button type="button" class="btn "><i class="bi bi-trash-fill" style={{ color: Red }}title="حذف"></i></button>{" "}
                    <button type="button" class="btn "><i class="bi bi-eye-fill" style={{ color: Purple }}title="جزییات بیشتر"></i></button>{" "}
                <h5 class="card-title"><i class="bi bi-person-check">{" "}</i>مشخصات مخاطب</h5>
                <ul>
                    <li class="list-group-item ist-group-item  d-flex justify-content-between align-items-start ">نام و نام خانوادگی :<span> {contact.fullname}</span> </li>
                    <li class="list-group-item ist-group-item  d-flex justify-content-between align-items-start"> ایمیل :<span>{contact.email}</span></li>
                    <li class="list-group-item ist-group-item  d-flex justify-content-between align-items-start">میزان تحصیلات :<span>{contact.job}</span></li>
                </ul>
                <div class="card-footer">
                    شماره تماس :
                </div>
                <a href="#" class="btn btn-outline-success">{contact.mobile}:{" "}<i class="bi bi-telephone-plus" style={{ color: Red }}></i></a>
            </div>
        </div>
    )
}
export default contact;