const Section = ({ title, content }) => {
    return (
        <div id={title} className="sectionStyle">
            <h3 style={{ margin:"0" }}>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

Section.defaultProps = {
    title: "title here",
    content: "content here",
}

export default Section
