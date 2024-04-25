import { LOGO_URL } from "../utilities/mocdata"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {

    const [btnName, setbtnName]=useState("Log-In")

    // subscribing the store using this selector it is a react hook
    const cartitems = useSelector((store)=>store.cart.items)

    return (
        <div className="header">
            <div className="logo">
                <img className="image" src={LOGO_URL} alt=""></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li > <Link to = "/" className="item"> Home </Link> </li>
                    <li> <Link to = "/about" className="item"> About </Link> </li>
                    <li> <Link to = "/help" className="item"> Help </Link> </li>
                    <li> <Link to = "/order" className="item"> Order </Link> </li>
                    <li> <Link to = "/cart" className="item"> Cart-{cartitems.length} </Link> </li>
                    <button className="log button" onClick={()=>{
                        btnName === "Log-In"?
                        setbtnName("Log-Out")
                        : setbtnName("Log-In")
                    }}> {btnName} </button>
                </ul>
            </div>
        </div>
    )
}

export default Header