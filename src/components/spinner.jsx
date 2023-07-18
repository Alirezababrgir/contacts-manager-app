import { Red } from "../helpers/color";
const Spinner = () => {
    return (
        <>
            <div className="justify-content-center" style={{height:"100px",color:Red}}>
                <p>صبر کنید...</p>{" "}
            </div>
            <div className="justify-content-center">
                <i class="fa-solid fa-gear fa-spin fa-2xl " style={{ fontSize: "80px",color:Red }} />
            </div>
        </>
    )
}
export default Spinner;