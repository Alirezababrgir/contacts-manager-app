import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import {
    GETcontact,
    Allgroups,
    UPDATEcontact,
} from "../../services/contactservice";
import { Purple, Orange, Current } from "../../helpers/color";
import Spinner from "../spinner"

const Editcon = ({forceRender,setForceRender}) => {
    const { contactID } = useParams();
    const navigate = useNavigate();

    const [state, setState] = useState({
        loading: false,
        contact: {
            fullname: "",
            photo: "",
            mobile: "",
            email: "",
            job: "",
            group: "",
        },
        groups: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState({ ...state, loading: true });
                const { data: contactData } = await GETcontact(contactID);
                const { data: groupsData } = await Allgroups();
                setState({
                    ...state,
                    loading: false,
                    contact: contactData,
                    groups: groupsData,
                });
            } catch (err) {
                console.log(err);
                setState({ ...state, loading: false });
            }
        };

        fetchData();
    }, []);

    const setContactInfo = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
            [event.target.name]:event.target.value,
            },
        });
    };

    const sendform = async (event) => {
        event.preventDefault();
        try {
            setState({ ...state, loading: true });
            const { data } = await UPDATEcontact(state.contact, contactID);
            console.log(data);
            setState({ ...state, loading: false });
            if (data) {
                navigate("/contacts");
                setForceRender(!forceRender)
            }
        } catch (err) {
            console.log(err);
            setState({ ...state, loading: false });
        }
    };

    const { loading, contact, groups } = state;
    console.log(contact)

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <div style={{ height: "100px", overflow: "hidden" }} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}><path d="M-169.58,186.03 C-51.63,39.97 283.57,-22.19 573.08,13.33 L504.79,-26.13 L-47.68,-50.80 Z" style={{ stroke: "none", fill: "#282a36" }}></path></svg></div>

                    <section className="p-4" style={{ opacity: "90%" }}>
                        <div className="container mb-4">
                            <div className="row my-2">
                                <div className="col text-center">
                                    <p className="h4 fw-bold" style={{ color: Orange}}>
                                        ویرایش مخاطب
                                        {' '}
                                        <i class="fa-solid fa-pen fa-flip"></i>
                                    </p>
                                </div>
                            </div>
                            <hr style={{ backgroundColor: Orange, height: "2px" }} />
                            <div
                                className="row p-3 w-75 mx-auto align-items-center mt-4"
                                style={{ backgroundColor: Current, borderRadius: "1em" }}
                            >
                                <div className="col-md-6">
                                    <img
                                        src={contact.photo}
                                        className="img-fluid rounded"
                                        style={{ border: `2px solid ${Purple}` }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <form onSubmit={sendform}>
                                        <div className="mb-2">
                                            <input
                                                name="fullname"
                                                type="text"
                                                className="form-control"
                                                value={contact.fullname}
                                                onChange={setContactInfo}
                                                required={true}
                                                placeholder="نام و نام خانوادگی"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="photo"
                                                type="text"
                                                value={contact.photo}
                                                onChange={setContactInfo}
                                                className="form-control"
                                                required={true}
                                                placeholder="آدرس تصویر"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="mobile"
                                                type="number"
                                                className="form-control"
                                                value={contact.mobile}
                                                onChange={setContactInfo}
                                                required={true}
                                                placeholder="شماره موبایل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                value={contact.email}
                                                onChange={setContactInfo}
                                                required={true}
                                                placeholder="آدرس ایمیل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="job"
                                                type="text"
                                                className="form-control"
                                                value={contact.job}
                                                onChange={setContactInfo}
                                                required={true}
                                                placeholder="شغل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <select
                                                name="group"
                                                value={contact.group}
                                                onChange={setContactInfo}
                                                required={true}
                                                className="form-control"
                                            >
                                                <option value="">انتخاب گروه</option>

                                                {groups.length > 0 &&
                                                    groups.map((group) => (
                                                        <option key={group.id} value={group.id}>
                                                            {group.name}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="submit"
                                                className="btn btn-primary"
                                                value="ویرایش مخاطب"
                                            />
                                            <Link
                                                to={"/contacts"}
                                                className="btn mx-2 btn-danger"
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
};

export default Editcon;