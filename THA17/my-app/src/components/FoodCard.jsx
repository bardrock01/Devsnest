import "../style.css";
function FoodCard(props) {
    return(
    
        <div className="foodcard">
            <div className="CardTitle">
                 {props.khanaKhaneKechez}
             </div>
            <div className="FoodInfo">
                {props.cal}
            </div>
        </div>
    
    )
}
export default FoodCard;
    
