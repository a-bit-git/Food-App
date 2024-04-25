import { reviewdata } from "../utilities/mocdata"
const Review = () => {
    return (
        <div className="content">
            <div className="container8">
                <h1 className="revspace2">Customers Reviews</h1>
                <div className="revspace"> 
                    {reviewdata.map((r)=>(
                        <p key = {r.rid}> 
                             ♣ &nbsp; {r.rdes}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Review