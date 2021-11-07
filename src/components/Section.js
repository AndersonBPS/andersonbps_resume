const Section = ({ sectionTitle, subSection }) => {
    return (
            (subSection.length > 1) ?
            <div id={sectionTitle} className="sectionStyle">
                <h3>{sectionTitle}</h3>
                {
                    subSection.map((item, i, arr) => {
                        return <div id={Object.keys(item)} className="subSectionStyle">
                            <h4 style={{ margin:"0" }}>{Object.keys(item)}</h4>
                            <p>{Object.values(item)}</p>
                        </div>
                    })
                } 
            </div> :
            <div id={Object.keys(subSection[0])} className="sectionStyle">
                <h3 style={{ margin:"0" }}>{Object.keys(subSection[0])}</h3>
                <p>{Object.values(subSection[0])}</p>
            </div>
    )
}

//Section.defaultProps = {
//    title: "title here",
//    content: "content here",
//}

export default Section
