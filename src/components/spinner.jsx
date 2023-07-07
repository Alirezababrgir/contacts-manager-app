const Spinner = () => {
    return (
        <>
            <div className="justify-content-center" style={{height:"50px"}}>
                <p>صبر کنید...</p>{" "}
            </div>
            <div className="justify-content-center">
                <i class="fa-solid fa-gear fa-spin fa-2xl " style={{ fontSize: "50px" }} />
            </div>
        </>
    )
}
export default Spinner;