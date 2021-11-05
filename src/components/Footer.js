const Footer = () => {
    const styling = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "67px",
    }

    return (
        <div style={ styling }>
            <div className="icon github">
                <div className="tooltip">Github</div>
                <span><i className="fa fa-github" style={{ fontSize:"30px" }}></i></span>
            </div>
            <div className="icon linkedin">
                <div className="tooltip">LinkedIn</div>
                <span><i className="fa fa-linkedin" style={{ fontSize:"30px" }}></i></span>
            </div>
            <div className="icon email">
                <div className="tooltip">Email</div>
                <span><i className="fa fa-at" style={{ fontSize:"30px" }}></i></span>
            </div>
        </div>
    )
}

export default Footer
