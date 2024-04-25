import { useState, useEffect } from "react"
import Cartaccordion from "./Cartaccordian"
import { useSelector } from "react-redux"
import { menucuisineshimmer } from "../utilities/mocdata"
import { useDispatch } from "react-redux"
import { clearCart } from "../utilities/cartSlice"

const Cart = () => {

    const cartitems = useSelector((store)=>store.cart.items)
    console.log(cartitems)
    
    const [menuinfo, setmenuinfo] = useState(menucuisineshimmer[3])
    const [showitems1, setshowitems1] = useState(false)
    const [showitems2, setshowitems2] = useState(false)
    const [showitems3, setshowitems3] = useState(false)

    useEffect(()=>{
        fetchmenudata()
    },[])

    const fetchmenudata=()=>{
        setTimeout(()=>{
            setmenuinfo(cartitems)
        },1000)
    }

    const x = menuinfo.filter((fr)=>fr.keyword.includes("Meal"))
    const y = menuinfo.filter((fr)=>fr.keyword.includes("Snacks"))
    const z = menuinfo.filter((fr)=>fr.keyword.includes("Desserts"))

    const handleclick1 = () => {setshowitems1(!showitems1)}
    const handleclick2 = () => {setshowitems2(!showitems2)}
    const handleclick3 = () => {setshowitems3(!showitems3)}

    const dispatch = useDispatch()
    const handleclearcart = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <div className="point">
                <h3>Under Process</h3>
                <button className="cart-btn"
                onClick={handleclearcart}>
                    Clear Cart
                </button>
            </div>
            <div className="cart">
                <div className="point kell" onClick={handleclick1}>
                    <span>Meal</span>
                    <span> 🔽 </span>
                </div>
                <div>
                    {showitems1 && x.map((r,i)=>(<Cartaccordion key = {i} cartaccordiondata={r}/>))}
                </div>       
            </div>
            <div className="cart">
                <div className="point kell" onClick={handleclick2}>
                    <span>Snacks</span>
                    <span> 🔽 </span>
                </div>
                <div>
                    {showitems2 && y.map((r,i)=>(<Cartaccordion key = {i} cartaccordiondata={r}/>))}
                </div>       
            </div>
            <div className="cart">
                <div className="point kell" onClick={handleclick3}>
                    <span>Desserts</span>
                    <span> 🔽 </span>
                </div>
                <div>
                    {showitems3 && z.map((r,i)=>(<Cartaccordion key = {i} cartaccordiondata={r}/>))}
                </div>       
            </div>
        </div>
        
    )
}

export default Cart