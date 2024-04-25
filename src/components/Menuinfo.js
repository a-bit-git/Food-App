import { useDispatch } from "react-redux"
import { addItem } from "../utilities/cartSlice"

const Menuinfo = (props) => {
    const {resmenuinfoData} = props
    const {cimageid, cname, cprice, cratings, cveg, cid, cp, keyword} = resmenuinfoData

    const dis = useDispatch()

    const handleCart = ({cid, cname, cimageid, cprice, keyword}) => {
        dis(addItem({cid, cname, cimageid, cprice, keyword}))
    }

    return (
        <div className="body">
            <div>
                {cp === "Best-Seller" && <label className="label">{cp}</label>}
            </div>
            <div className="rest-card">
                <img className="rest-logo" src = {cimageid} alt="">
                </img>
                <div className="pot">
                    <div className="veg">
                        <h2> {cname} </h2>
                        <h4> {cveg} </h4>   
                    </div>
                    <h4> Price (₹) - {cprice} </h4>
                    <div >
                        <h4 className = "veg"> 
                            {cratings} * 
                            <button className="addbtn" onClick={()=>handleCart({cid, cname, cimageid, cprice, keyword})}>
                                +
                            </button> 
                        </h4>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Menuinfo