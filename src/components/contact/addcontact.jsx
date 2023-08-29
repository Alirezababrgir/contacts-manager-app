import { Link } from "react-router-dom";
import { Current, Green, Purple, Red } from "../../helpers/color";
import Spinner from "../spinner";
import { useContext } from "react";
import { Contactcontext } from "../../context/contactcontext";
import { contactSchema } from "./validation/contactsvalidation";//schema YUP add
import { useFormik } from "formik"; //formik framework add
const Addcon = () => {
    const { getloader, getgroup, sendformdata } = useContext(Contactcontext); //contextapi


    const Formic = useFormik({ //useformik form validation
        initialValues: {
            fullname: "",
            photo: "",
            mobile: "",
            email: "",
            job: "",
            group: ""
        },
        validationSchema: contactSchema,
        onSubmit: (values) => {
            sendformdata(values);
        }
    });


    return (

        <>
            {getloader ? (
                <Spinner />
            ) : (
                <>
                    <div style={{ height: "100px", overflow: "hidden" }} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}><path d="M-169.58,186.03 C-51.63,39.97 283.57,-22.19 573.08,13.33 L504.79,-26.13 L-47.68,-50.80 Z" style={{ stroke: "none", fill: "#282a36" }}></path></svg></div>
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
                                    <form id="formadd" style={{ backgroundColor: Current, borderRadius: "20px"}}
                                        className="p-4"
                                        onSubmit={Formic.handleSubmit}>
                                        <div className="mb-2">
                                            <input
                                                id="fullname"
                                                name="fullname"
                                                type="text"
                                                value={Formic.values.fullname}
                                                onChange={Formic.handleChange}
                                                onBlur={Formic.handleBlur}
                                                className="form-control"
                                                placeholder="نام و نام خانوادگی ..."
                                            />
                                            {Formic.touched.fullname && Formic.errors.fullname ? (
                                                <div className="text-danger">
                                                    {Formic.errors.fullname}
                                                </div>
                                            ) : null}

                                        </div>
                                        <div className="mb-2">
                                            <input
                                                id="photo"
                                                name="photo"
                                                type="text"
                                                value={Formic.values.photo}
                                                onChange={Formic.handleChange}
                                                onBlur={Formic.handleBlur}
                                                className="form-control"
                                                placeholder="تصویر مخاطب"
                                            />
                                            {Formic.touched.photo && Formic.errors.photo ? (
                                                <div className="text-danger">
                                                    {Formic.errors.photo}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                id="mobile"
                                                name="mobile"
                                                type="number"
                                                value={Formic.values.mobile}
                                                onChange={Formic.handleChange}
                                                onBlur={Formic.handleBlur}
                                                className="form-control"
                                                placeholder="شماره موبایل"
                                            />
                                            {Formic.touched.mobile && Formic.errors.mobile ? (
                                                <div className="text-danger">
                                                    {Formic.errors.mobile}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={Formic.values.email}
                                                onChange={Formic.handleChange}
                                                onBlur={Formic.handleBlur}
                                                className="form-control"
                                                placeholder="ادرس ایمیل "
                                            />
                                            {Formic.touched.email && Formic.errors.email ? (
                                                <div className="text-danger">
                                                    {Formic.errors.email}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                id="text"
                                                type="text"
                                                name="job"
                                                value={Formic.values.job}
                                                onChange={Formic.handleChange}
                                                onBlur={Formic.handleBlur}
                                                className="form-control"
                                                placeholder="شغل مخاطب"
                                            />
                                            {Formic.touched.job && Formic.errors.job ? (
                                                <div className="text-danger">
                                                    {Formic.errors.job}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="mb-2">
                                            <select
                                                style={{ border: "2px solid rgb(77, 17, 77) " }}
                                                name="group"
                                                value={Formic.values.group}
                                                onChange={Formic.handleChange}
                                                onBlur={Formic.handleBlur}
                                                className="form-control"
                                                placeholder="گروه "
                                            >
                                                <option value="">انتخاب گروه</option>

                                                {getgroup.length > 0 &&
                                                    getgroup.map((group) => (
                                                        <option key={group.id} value={group.id}>
                                                            {group.name}
                                                        </option>))}
                                            </select>
                                            {Formic.errors.group && Formic.touched.group ?
                                                (<div className="text-danger">{Formic.errors.group}</div>)
                                                : null}
                                        </div>
                                        <div className="mt-4">
                                            <input
                                                type="submit"
                                                className="btn btn-success"
                                                value="ساخت مخاطب"
                                                style={{ boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}
                                            />
                                            <Link
                                                to={"/contacts"}
                                                className=" mx-4 btn btn-danger"
                                                style={{ border: "2px solid rgb(77, 17, 77)", boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}
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
