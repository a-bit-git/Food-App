import Restaurant from "./Restaurant"
import { data, Appshimmer } from "../utilities/mocdata"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Body = () => {
    const [datalist, setdatalist] = useState(Appshimmer)
    const [filterRes, setfilterRes] = useState(Appshimmer)
    const [searchText, setsearchText] = useState("")

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=()=>{
        setTimeout(()=>{
            setdatalist(data)
            setfilterRes(data)
        },1000)
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" 
                        value={searchText} onChange={(e)=>{
                            setsearchText(e.target.value)
                    }}/>
                    <button className="search-btn button" onClick={()=>{
                        const filterdata = datalist.filter((fr,i)=>
                            fr.name.toLowerCase().includes(searchText.toLowerCase()) ||
                            fr.cuisine.join(" ").toLowerCase().includes(searchText.toLowerCase())      
                        )
                        setfilterRes(filterdata)
                    }}>
                        Search</button>
                </div>

                <button className="filter-btn button" 
                onClick={()=>{
                    const filterdata = datalist.filter((fr)=>fr.ratings>=4.2)
                    setfilterRes(filterdata)
                }}>
                Top Rated</button>


                <button className="filter-btn button" 
                onClick={()=>{
                    const filterdata = datalist.filter((fr)=>fr.delivery<=30)
                    setfilterRes(filterdata)
                }}>
                Fast Delivery</button>


                <button className="filter-btn button" 
                onClick={()=>{
                    const filterdata = datalist.filter((fr)=>fr.keyword.includes("Pure"))
                    setfilterRes(filterdata)
                }}>
                Pure Veg</button>


                <button className="filter-btn button" 
                onClick={()=>{
                    const filterdata = datalist.filter((fr)=>fr.keyword.includes("Non"))
                    setfilterRes(filterdata)
                }}>
                Non-Veg</button>


                <button className="filter-btn button" 
                onClick={()=>{
                    const filterdata = datalist.filter((fr)=>fr.keyword.includes("Snacks"))
                    setfilterRes(filterdata)
                }}>
                Snacks</button>


                <button className="filter-btn button" 
                onClick={()=>{
                    const filterdata = datalist.filter((fr)=>fr.keyword.includes("Meal"))
                    setfilterRes(filterdata)
                }}>
                Meal</button>


                <button className="filter-btn button" 
                onClick={()=>{
                    const filterdata = datalist.filter((fr)=>fr.keyword.includes("Desserts"))
                    setfilterRes(filterdata)
                }}>
                Desserts</button>

            </div>
            <div className="rest-container">
                {filterRes.map((r)=>(
                    <Link key = {r.id} to = {"/restaurant/" + r.id} className="item">
                        <Restaurant 
                        resData={r}/>
                    </Link> 
                ))}
            </div>
        </div>
    )
}

export default Body