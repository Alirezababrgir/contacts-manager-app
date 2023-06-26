import { Purple, Cyan, Red, Orange } from "../../helpers/color";
const contact = () => {//contact card
    return (
        <div class="card" >
            <img src="https://people.com/thmb/njEM_g0O0Ko1R7ktUdPYfv85x9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(979x252:981x254)/johnathan-majors-ant-man-wasp-022023-tout-70d730f6d298494ba46ef9ae571f3768.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
                    <button type="button" class="btn"><i class="bi bi-pen-fill"  style={{ color: Orange }}></i></button>{" "}
                    <button type="button" class="btn "><i class="bi bi-trash-fill" style={{ color: Red }}></i></button>{" "}
                    <button type="button" class="btn "><i class="bi bi-eye-fill" style={{ color: Purple }}></i></button>{" "}
                <h5 class="card-title"><i class="bi bi-person-check">{" "}</i>مشخصات مخاطب</h5>
                <ul>
                    <li class="list-group-item ist-group-item  d-flex justify-content-between align-items-start ">نام و نام خانوادگی :<span>محمد علیزاده</span> </li>
                    <li class="list-group-item ist-group-item  d-flex justify-content-between align-items-start">محل تولد :<span>کرج</span></li>
                    <li class="list-group-item ist-group-item  d-flex justify-content-between align-items-start">میزان تحصیلات :<span>لیسانس</span></li>
                </ul>
                <div class="card-footer">
                    شماره تماس :
                </div>
                <a href="#" class="btn btn-outline-success">09215805971:{" "}<i class="bi bi-telephone-plus" style={{ color: Red }}></i></a>
            </div>
        </div>
    )
}
export default contact;