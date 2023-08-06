import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import {
    GETcontact,
    Allgroups,
    DELETcontact,
} from "../../services/contactservice";
import { Purple, Current, Red } from "../../helpers/color";
import Spinner from "../spinner"

const Delcon = ({ forceRender, setForceRender }) => {
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

    const sendform = async (event) => {
        event.preventDefault();
        try {
            setState({ ...state, loading: true });
            const { data } = await DELETcontact(contactID);
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

    const { loading, contact } = state;
    console.log(contact)

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <div style={{ height: "100px", overflow: "hidden" }} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}><path d="M-169.58,186.03 C-51.63,39.97 283.57,-22.19 573.08,13.33 L504.79,-26.13 L-47.68,-50.80 Z" style={{ stroke: "none", fill: "#282a36" }}></path></svg></div>
                    <section className="p-4 container" style={{ opacity: "90%" }}>
                        <div className="row my-2">
                            <div className="col text-center">
                                <p className="h4 fw-bold" style={{ color: Red }}>
                                    حذف مخاطب
                                    {" "}
                                    <i class="fa-regular fa-trash-can fa-shake"></i>
                                </p>
                            </div>
                        </div>
                        <hr style={{ backgroundColor: Red, height: "2px" }} />
                        <div className="container mb-4" >
                            <div
                                className="row p-3 w-75 mx-auto align-items-center mt-4"
                                style={{ backgroundColor: Red, borderRadius: "1em" }}
                            >
                                <div className="col col-md-4">
                                    <img
                                        src={contact.photo}
                                        className="img-fluid rounded"
                                        style={{ border: `2px solid ${Purple}` }}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <form onSubmit={sendform}>
                                        <ul className="list-group" style={{ backgroundColor:Red }}>
                                            <li className="list-group-item list-group-item-dark">
                                                نام و نام خانوادگی :{" "}
                                                <span className="fw-bold">{contact.fullname}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                شماره موبایل :{" "}
                                                <span className="fw-bold">{contact.mobile}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                ایمیل : <span className="fw-bold">{contact.email}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                شغل : <span className="fw-bold">{contact.job}</span>
                                            </li>

                                        </ul>

                                        <div className="mt-4">
                                            <input
                                                type="submit"
                                                className="btn btn-danger"
                                                value="حذف مخاطب "
                                            />
                                            <Link
                                                to={"/contacts"}
                                                className="btn mx-2 btn-primary"
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

export default Delcon;