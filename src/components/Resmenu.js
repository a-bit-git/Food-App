import { useState, useEffect } from "react"
import Menuinfo from "./Menuinfo"
import Menuheader from "./Menuheader"
import { resHeader, resHeadershimmer, menucuisine, menucuisineshimmer } from "../utilities/mocdata"
import { useParams } from "react-router-dom"

const Resmenu = () => {

    const { resID } = useParams()

    const [reshead, setreshead] = useState(resHeadershimmer[resID])
    const [menuinfo, setmenuinfo] = useState(menucuisineshimmer[resID])

    useEffect(()=>{
        fetchmenudata()
    })

    const fetchmenudata=()=>{
        setTimeout(()=>{
            setreshead(resHeader[resID])
            setmenuinfo(menucuisine[resID])
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

export default Resmenu