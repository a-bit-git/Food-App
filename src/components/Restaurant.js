const Restaurant = (props) => {
    const {resData} = props
    const {imageid, name, veg, cuisine, ratings, delivery} = resData
    return (
        <div className="rest-card">
            <img className="rest-logo" src ={imageid} alt=""></img>
            <div className="pot">
                <div className="veg">
                    <h2> {name} </h2>
                    <h4> {veg} </h4>   
                </div>
                <h4> {cuisine.join(", ")} </h4>
                <h4> Ratings - {ratings} * </h4>
                <h4> Delivery in - {delivery} min </h4>
            </div>
        </div>
    )
}

export default Restaurant