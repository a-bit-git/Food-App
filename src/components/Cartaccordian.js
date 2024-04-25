
const Cartaccordion = (props) => {

    const {cartaccordiondata} = props
    const {cimageid, cname, cprice, keyword, cratings, cveg, cid, cp} = cartaccordiondata


    return (
        <div className="body">
            <div className="pok diff">
                <img className="jell-img" src = {cimageid} alt="">
                </img>
                <div className="kok">
                    <span className="kok2">{cname}</span>
                    <span className="kok2"> (₹) - {cprice}</span>
                    <span className="kok2">
                        <button>+</button>
                        <button>-</button>
                    </span>
                </div>
                
            </div>
        </div> 
    )
}

export default Cartaccordion