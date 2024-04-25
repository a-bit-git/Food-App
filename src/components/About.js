import { foodimg } from "../utilities/mocdata"
const About = () => {
    return (
        <div className="content">
            <div className="container rest-container">
                <h1 className="container2">About Zwigato</h1>
                <p className="container3">Our technology platform connects customers, restaurant 
                partners and delivery partners, serving their multiple needs. Customers use our 
                platform to search and discover restaurants, order food delivery. On the other hand, we provide restaurant partners with 
                industry-specific marketing tools which enable them to engage and acquire customers to 
                grow their business while also providing a reliable and efficient last mile delivery 
                service. We also provide our delivery partners with transparent and flexible 
                earning opportunities. <br/> Created By - Abhinav Gupta (B.Tech, Institute of 
                Engineering & Technology, Lucknow)</p>
            </div>
            <div>
                <img className="foodimg" src={foodimg} alt=""></img>
            </div>
        </div>
        
    )
}
export default About