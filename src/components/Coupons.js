import { foodimg } from "../utilities/mocdata"
import { useState } from "react"
import { coupondata } from "../utilities/mocdata"

const Coupons = () => {
    const [btnName, setbtnName]=useState("Code")

    const btnClick = (o) => {
        setbtnName((prevBtnName) => prevBtnName === o.ccode ? "Code" : o.ccode);
    };
    
    return (
        <div className="content">
            <div className="container">
                <h1 className="container2">Coupons for Savings</h1>
                <p className="container3 rest">
                    {coupondata.map((o)=>(
                        <div>
                            <h3 className="container7">&nbsp;&nbsp;&nbsp;&nbsp;♣&nbsp;&nbsp;&nbsp;{o.cdes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⮞
                                <button className="log2 button" key = {o.cid} onClick={() => btnClick(o)}>
                                    {btnName === o.ccode ? o.ccode : "Code"}
                                </button>
                            </h3>
                        </div>
                    ))}
                </p>
            </div>
            <div>
                <img className="foodimg" src={foodimg} alt=""></img>
            </div>
        </div>
        //     
        // </div>
    )
}
export default Coupons