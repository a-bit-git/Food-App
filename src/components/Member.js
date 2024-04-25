import { foodimg } from "../utilities/mocdata"
import { useState } from "react"
const Membership = () => {

    const [btnName, setbtnName]=useState("Subscribe")
    return (
        <>
            <div className="content">
                <div className="container rest-container">
                    <h1 className="container2">Be Our Gold Member</h1>
                    <p className="container3">
                        Elevate your dining experience to the next level with our Gold Membership! 
                        As a Gold Member, you'll unlock a world of exclusive benefits and privileges
                        designed to enhance every aspect of your food ordering journey. Saving your
                        time and money with each delicious meal. Ensuring that every bite is not only
                        delightful but also affordable. Adding an extra touch of indulgence to your
                        culinary adventures. Making every dining occasion truly extraordinary. 
                        Don't miss out on this golden opportunity to elevate your food ordering 
                        experience – join our Gold Membership today!</p>
                </div>
                <div>
                    <img className="foodimg" src={foodimg} alt=""></img>
                </div>
            </div>
            <div className="content">
                <div className="container5 rest-container">
                    <p className="container3">
                        <h4 className="container6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;♣&nbsp;&nbsp; Enjoy free delivery on every order.</h4>
                        <h4 className="container6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;♣&nbsp;&nbsp; Unlock special coupons for additional savings.</h4>
                        <h4 className="container6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;♣&nbsp;&nbsp; Receive a complimentary meal every month.</h4>
                        <h4 className="container6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;♣&nbsp;&nbsp; Get extra soft drinks with every purchase.</h4>
                        <h4 className="container6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;♣&nbsp;&nbsp; Access exclusive special offers available only to Gold Members.</h4>
                    </p>
                </div>
                <div className="middle">
                        <button class="large button" onClick={()=>{
                        btnName === "Subscribe"?
                        setbtnName("Subscribed")
                        : setbtnName("Subscribe")
                        }}> {btnName} </button>
                </div>
            </div>
        </>
    )
}
export default Membership