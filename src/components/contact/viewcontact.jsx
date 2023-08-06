import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { GETcontact, GETgroup } from "../../services/contactservice";

import Spinner from "../../components/spinner"

import {Current, Purple, Green} from "../../helpers/color";

const ViewCon = () => {
    const { contactID } = useParams();

    const [state, setState] = useState({
        loading: false,
        contact: {},
        group: {},
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState({ ...state, loading: true });
                const { data: contactData } = await GETcontact(contactID);
                const { data: groupData } = await GETgroup(contactData.group);

                setState({
                    ...state,
                    loading: false,
                    contact: contactData,
                    group: groupData,
                });
            } catch (err) {
                console.log(err.message);
                setState({ ...state, loading: false });
            }
        };

        fetchData();
    }, []);

    const { loading, contact, group } = state;

    return (
        <>
            <div style={{ height: "100px", overflow: "hidden" }} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}><path d="M-169.58,186.03 C-51.63,39.97 283.57,-22.19 573.08,13.33 L504.79,-26.13 L-47.68,-50.80 Z" style={{ stroke: "none", fill: "#282a36" }}></path></svg></div>

            <section className="view-contact-intro p3 mt-4">
                <div className="container">
                    <div className="row my-2 text-center">
                        <p className="h4 fw-bold" style={{ color: Purple }}>
                      اطلاعات کامل مخاطب
                      {' '}
                      <i class="fa-solid fa-eye fa-beat-fade"></i>
                        </p>
                    </div>
                    <hr style={{ backgroundColor: Purple, height: "2px" }} />
                </div>
            </section>


            {loading ? (
                <Spinner />
            ) : (
                <>
                    {Object.keys(contact).length > 0 && (
                        <section className="view-contact mt-e mt-4" style={{opacity:"90%"}}>
                            <div
                                className="container p-4"
                                style={{ borderRadius: "1em", backgroundColor: Current }}
                            >
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                        <img
                                            src={contact.photo}
                                            alt=""
                                            className="img-fluid rounded"
                                            style={{ border: `1px solid ${Purple}` }}
                                        />
                                    </div>
                                    <div className="col-md-10" s>
                                        <ul className="list-group" style={{ backgroundColor: Current }}>
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
                                            <li className="list-group-item list-group-item-dark">
                                                گروه : <span className="fw-bold">{group.name}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row my-2 mt-4">
                                    <div className="d-grid gap-2 col-2 mx-auto">
                                        <Link
                                            to={"/contacts"}
                                            className="btn btn-danger"
                                            style={{border:"1px solid purple"}}
                                        >
                                            برگشت به صفحه اصلی
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </>
            )}
        </>
    );
};

export default ViewCon;