import Section from "./Section"
import React, { useEffect, useState } from 'react';
import useWindowDimensions from "./getWindowDimensions";
import useWindowOffset from "./useWindowOffset";

const Sections = ({ color, backgroundColor, }) => {
    const [toggleBars, setToggleBars] = useState(false);

    function handleCloseClick(e) {
        if (e.target.className === "material-icons-outlined" || e.target.className === "barsDropDownBox") {
            setToggleBars(false);
            document.body.style = 'overflow-y: unset;';
            console.log(e);
        }
    }

    function handleOpenClick() {
        setToggleBars(!toggleBars);
        document.body.style = 'overflow-y: hidden;';
    }

    const { offsetY } = useWindowOffset();
    const { width, visualHeight } = useWindowDimensions();
    const [offset, setOffset] = useState(0);
    const [pos, setPos] = useState([]);

    const handleScroll = () => {
        setOffset(window.pageYOffset);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        if (width > 1024) {setToggleBars(false)};
    }, [width])

    useEffect(() => {
        const idsArr = ["Carreira Profissional", "Carreira Profissional 2"];
        const posByIds = [];
        for (const e of idsArr) {
            let obj = {}
            const section = document.getElementById(e);
            const rect = section.getBoundingClientRect();
            obj[e] = Math.trunc(rect["top"]) + offsetY;
            posByIds.push(obj);
        }
        setPos(posByIds)
    }, [offsetY])
    console.log(offsetY)
    console.log(pos)
    return (
        <div className="realBody">
            { 
                toggleBars && <div onClick={handleCloseClick} className="barsDropDownBox">
                    <div className="barsDropDown">
                        <div className="barsBtnIn">
                            <span onClick={handleCloseClick} className="material-icons-outlined" style={{ fontSize:"50px" }}>close</span>
                        </div>
                        <div className="phoneMapGuide">
                            {
                                pos.map((item, i, arr) => {
                                    return ( (offset + 56) >= Object.values(item)[0] && (offset + 56) < Object.values(arr[i+1])) ? 
                                    <span style={{ fontSize: "larger" }} onClick={() => window.scrollTo({top: Object.values(item)[0] - 56, left: 0, behavior: "smooth"})}><i>{Object.keys(item)[0]}</i></span> : 
                                    <span onClick={() => window.scrollTo({top: Object.values(item)[0] - 56, left: 0, behavior: "smooth"})}>{Object.keys(item)[0]}</span>
                                }) 
                            }
                        </div>
                    </div>
                </div>
            }
            <div className="contentBox">
                <div className="content">
                    <Section
                        sectionTitle="Carreira Profissional"
                        subSection={[
                            {'primeiro trabalho': 'Samsung'},
                            {'segundo trabalho': 'Apple'}
                        ]}
                    />
                    <Section
                        sectionTitle="Carreira Profissional 2"
                        subSection={[
                            {'primeiro trabalho': 'Samsung'},
                            {'segundo trabalho': 'Apple'}
                        ]}
                    />
                </div>
            </div>
            <div className={ (width <= 1024 && offset > 165) ? "phoneMapBox" : "mapBox" }>
                <div className={ (width <= 1024 && offset > 165) ? "phoneMap" : "map" }>
                    { (width > 1024) ? 
                        <>
                            {
                                pos.map((item, i, arr) => {
                                    return ( offset >= Object.values(item)[0] && offset < Object.values(arr[i+1])) ? 
                                    <span style={{ cursor: "pointer" }} onClick={() => window.scrollTo({top: Object.values(item)[0], left: 0, behavior: "smooth"})}><i>{Object.keys(item)[0]}</i></span> : 
                                    <span style={{ cursor: "pointer" }} onClick={() => window.scrollTo({top: Object.values(item)[0], left: 0, behavior: "smooth"})}>{Object.keys(item)[0]}</span>
                                })
                            }
                        </> :
                        <>
                        <div onClick={handleOpenClick} className="barsBtnOut">
                            <span className="material-icons-outlined" style={{ fontSize:"35px" }}>menu</span>
                        </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

Sections.defaultProps = {
    color: 'black',
}

export default Sections

//{ pos.map((item, i, arr) => {
//    return ( offset >= Object.values(item)[0] && offset < Object.values(arr[i+1])) ? 
//    <a href={"#" + Object.keys(item)[0]}><i>{Object.keys(item)[0]}</i></a> : 
//    <a href={"#" + Object.keys(item)[0]}>{Object.keys(item)[0]}</a>
//}) }