import { label } from "../utilities/mocdata"
import { Link } from "react-router-dom"
const Menuheader = (props) => {
    const {resmenuData} = props 
    const {resimageid, resname, address1, address2, timing} = resmenuData
    return (
        <div className="menuheader">
            <img className="resimageid" src ={resimageid} alt="">
            </img>
            <div className="menuheaderdetail">
                <h1> {resname} </h1>
                <h3> {address1} </h3>
                <h3> {address2} </h3>
                <h4> Timing : {timing} </h4>
                <h4>
                    {label.map((r)=>(
                        <button key = {r.id} className="menubtn button">
                            <Link to = {"/"+r.pname} className="item">{r.labelname}</Link>
                        </button>
                    ))}
                </h4>
            </div>
        </div> 
    )
}

export default Menuheader