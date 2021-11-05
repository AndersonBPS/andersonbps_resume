import Section from "./Section"
import React, { useEffect, useState } from 'react';
import useWindowDimensions from "./getWindowDimensions";
import useWindowOffset from "./useWindowOffset";

const Sections = ({ color, backgroundColor, }) => {
    const [toggleBars, setToggleBars] = useState(false);

    function handleClick(e) {
        if (e.target.className !== "barsDropDown") {
            setToggleBars(false);
        }
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
        const idsArr = ["Carreira Profissional", "Formacao Profissional", "3", "4", "5", "6", "7"];
        const posByIds = [];
        for (const e of idsArr) {
            let obj = {}
            const section = document.getElementById(e);
            const rect = section.getBoundingClientRect();
            obj[e] = rect["top"];
            posByIds.push(obj);
        }
        setPos(posByIds)
    }, [])
    console.log(offsetY)
    return (
        <div className="realBody">
            { 
                toggleBars && <div className="barsDropDownBox" onClick={handleClick}>
                    <div className="barsDropDown">
                        <div onClick={() => setToggleBars(!toggleBars)} className="barsBtnIn">
                            <span className="material-icons-outlined" style={{ fontSize:"50px" }}>close</span>
                        </div>
                        <div className="phoneMapGuide">
                            { pos.map((item, i, arr) => {
                                return ( offset >= Object.values(item)[0] && offset < Object.values(arr[i+1])) ? 
                                <a href={"#" + Object.keys(item)[0]}><i>{Object.keys(item)[0]}</i></a> : 
                                <a href={"#" + Object.keys(item)[0]}>{Object.keys(item)[0]}</a>
                            }) }
                        </div>
                    </div>
                </div>
            }
            <div className="contentBox">
                <div className="content">
                    <Section title="Carreira Profissional" content="bla bla bla bla"/>
                    <Section title="Formacao Profissional" content="bla bla bla bla"/>
                    <Section title="3" content="bla bla bla bla"/>
                    <Section title="4" content="bla bla bla bla"/>
                    <Section title="5" content="bla bla bla bla"/>
                    <Section title="6" content="bla bla bla bla"/>
                    <Section title="7" content="bla bla bla bla"/>
                </div>
            </div>
            <div className={ (width <= 1024 && offset > 165) ? "phoneMapBox" : "mapBox" }>
                <div className={ (width <= 1024 && offset > 165) ? "phoneMap" : "map" }>
                    { (width > 1024) ? 
                        <>
                            { pos.map((item, i, arr) => {
                                return ( offset >= Object.values(item)[0] && offset < Object.values(arr[i+1])) ? 
                                <a href={"#" + Object.keys(item)[0]}><i>{Object.keys(item)[0]}</i></a> : 
                                <a href={"#" + Object.keys(item)[0]}>{Object.keys(item)[0]}</a>
                            }) }
                        </> :
                        <>
                        <div onClick={() => setToggleBars(!toggleBars)} className="barsBtnOut">
                            <i className="fa fa-bars" style={{ fontSize:"30px" }}></i>
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
