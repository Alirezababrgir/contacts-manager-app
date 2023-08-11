import { Link } from "react-router-dom";
import { Current, Green } from "../../helpers/color";
import Spinner from "../spinner";
import { useContext } from "react";
import { Contactcontext } from "../../context/contactcontext";
const Addcon = () => {
    const{ getloader,getaddContact , getgroup, setconfiginfo, sendformdata }=useContext(Contactcontext); //contextapi

    return (

        <>
            <div style={{ height: "100px", overflow: "hidden" }} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}><path d="M-169.58,186.03 C-51.63,39.97 283.57,-22.19 573.08,13.33 L504.79,-26.13 L-47.68,-50.80 Z" style={{ stroke: "none", fill: "#282a36" }}></path></svg></div>

            {getloader ? (
                <Spinner />
            ) : (
                <>
                    <section style={{ opacity: "90%" }}>
                        <img
                            src={require("../../asssets/Content creation_Isometric.png")}
                            height="500px"
                            style={{
                                position: "absolute",
                                zIndex: "-1",
                                top: "180px",
                                left: "200px",
                                opacity: "70%",
                            }}
                        />
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p
                                        className="h4 fw-bold text-center"
                                        style={{ color: Green }}
                                    >
                                        مخاطب جدید را اضافه کنید ...
                                    </p>
                                </div>
                            </div>
                            <hr style={{ backgroundColor: Green, height: "2px" }} />
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <form style={{backgroundColor:Current,borderRadius:"20px"}} className="p-4" onSubmit={sendformdata}>
                                        <div className="mb-2">
                                            <input
                                                name="fullname"
                                                type="text"
                                                value={getaddContact.fullname}
                                                onChange={setconfiginfo}
                                                className="form-control"
                                                placeholder="نام و نام خانوادگی"
                                                required={true}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="photo"
                                                type="text"
                                                value={getaddContact.photo}
                                                onChange={setconfiginfo}
                                                className="form-control"
                                                required={true}
                                                placeholder="آدرس تصویر"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="mobile"
                                                type="number"
                                                value={getaddContact.mobile}
                                                onChange={setconfiginfo}
                                                className="form-control"
                                                required={true}
                                                placeholder="شماره موبایل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="email"
                                                name="email"
                                                value={getaddContact.email}
                                                onChange={setconfiginfo}
                                                className="form-control"
                                                required={true}
                                                placeholder="آدرس ایمیل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                name="job"
                                                value={getaddContact.job}
                                                onChange={setconfiginfo}
                                                className="form-control"
                                                required={true}
                                                placeholder="شغل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <select
                                                name="group"
                                                value={getaddContact.group}
                                                onChange={setconfiginfo}
                                                required={true}
                                                className="form-control"
                                            >
                                                <option value="">انتخاب گروه</option>

                                                {getgroup.length > 0 &&
                                                    getgroup.map((group) => (
                                                        <option key={group.id} value={group.id}>
                                                            {group.name}
                                                        </option>))}
                                            </select>
                                        </div>
                                        <div className="mt-4">
                                            <input
                                                type="submit"
                                                className="btn btn-success"
                                                value="ساخت مخاطب"
                                            />
                                            <Link
                                                to={"/contacts"}
                                                className=" mx-4 btn btn-danger"
                                                style={{ border: "2px solid rgb(77, 17, 77)" }}
                                            >
                                                انصراف
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}
export default Addcon;
