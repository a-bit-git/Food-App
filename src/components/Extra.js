import { useState, useEffect } from "react"
import Menuinfo from "./Menuinfo"
import Menuheader from "./Menuheader"
import { resHeader, resHeadershimmer, menucuisine, menucuisineshimmer } from "../utilities/mocdata"

const Extra = () => {

    const [reshead, setresheader] = useState(resHeadershimmer[12])
    const [menuinfo, setmenuinfo] = useState(menucuisineshimmer[12])

    useEffect(()=>{
        fetchmenudata()
    },[])

    const fetchmenudata=()=>{
        setTimeout(()=>{
            setresheader(resHeader[12])
            setmenuinfo(menucuisine[12])
        },1000)
    }

    return (
        <div className="menu">
            <div>
                <Menuheader resmenuData={reshead}/>
            </div>
            <div className="rest-container">
                {menuinfo.map((r,i)=>(
                    <Menuinfo key = {i}
                    resmenuinfoData={r}/>
                ))}
            </div>
        </div>
    )
}

export default Extra