//import { useEffect } from 'react';

const Section = ({ title, content }) => {
    //useEffect(() => {
    //    const obj = {};
    //    const section = document.getElementById(title);
    //    const rect = section.getBoundingClientRect();
    //    obj[title] = rect["top"];
    //   state[1]([...state[0], obj]);
    //    console.log([...state[0], obj]);
    //    console.log(state[0]);
    //    console.log(obj);
    //}, [])

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
