import { foodimg } from "../utilities/mocdata"
const Help = () => {
    return (
        <div className="content">
            <div className="container">
                <h1>Contact Us</h1>
                <p> 
                    ♣ &nbsp;&nbsp;Email : zwigato@gmail.com<br></br>
                    ♣ &nbsp;&nbsp;Toll Free : 1800-5252-3333<br></br>
                    ♣ &nbsp;&nbsp;Customer Care : 5228-62, 5228-63, 5228-64<br></br>
                    ♣ &nbsp;&nbsp;Office Timing : 10:00 AM - 06:00 PM (Monday-Friday)<br></br>
                    ♣ &nbsp;&nbsp;Head Office Adress : B.M. Road, Vijay Khand,Sector-4,<br></br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      Near Apollo Hospital,Navi Mumbai, Maharashtra, India (400761)<br></br>
                    ♣ &nbsp;&nbsp;Regional Office : • Mumbai 
                      • Delhi  • Hyderabad • Lucknow • Bangalore • Pune<br></br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Indore • Chennai 
                      • Ahmedabad • Jaipur • Chandigarh • Kolkata • Patna • Surat
                </p>
            </div>
            <div>
                <img className="foodimg" src={foodimg} alt=""></img>
            </div>
        </div>
    )
}
export default Help