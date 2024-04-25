import { foodimg } from "../utilities/mocdata"
import { offerdata } from "../utilities/mocdata"
import { useState } from "react"

const Offers = () => {
    const [btnName, setbtnName]=useState("Add")

    const btnClick = (k) => {
        setbtnName((prevBtnName) => prevBtnName === k.ocode ? "Add" : k.ocode);
    };

    return (
        <div className="content">
            <div className="container">
                <h1 className="container2">Offers on Orders</h1>
                <p className="container3 rest">
                    {offerdata.map((k)=>(
                        <div key = {k.offid}>
                            <h4 className="container4">
                                <div >
                                    <button className="log3 button" onClick={() => btnClick(k)}>
                                        {btnName === k.ocode ? k.ocode : "Add"}
                                    </button>
                                    &nbsp;&nbsp;{k.offdes}
                                </div> 
                            </h4>
                        </div>
                    ))}
                </p>
            </div>
            <div>
                <img className="foodimg" src={foodimg} alt=""></img>
            </div>
        </div>  
    )
}
export default Offers