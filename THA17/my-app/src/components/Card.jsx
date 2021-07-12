import '../style.css'
import FoodCard from './FoodCard';


function Card(){
    return(
        <div className="main">
        <div className="cardContainer">
           <FoodCard khanaKhaneKechez="Allo Ka paratha" cal="200"/>
            <FoodCard khanaKhaneKechez="pyaz ka paratha" cal="400"/>
            <FoodCard khanaKhaneKechez="pyaz ka paratha" cal="400"/>
            <FoodCard khanaKhaneKechez="pyaz ka paratha" cal="400"/>
            <FoodCard khanaKhaneKechez="pyaz ka paratha" cal="400"/>
            <FoodCard khanaKhaneKechez="pyaz ka paratha" cal="400"/>
            <FoodCard khanaKhaneKechez="pyaz ka paratha" cal="400"/>
            <FoodCard khanaKhaneKechez="pyaz ka paratha" cal="400"/>
            <FoodCard khanaKhaneKechez="pyaz ka paratha" cal="400"/>
            <FoodCard khanaKhaneKechez="pyaz ka paratha" cal="400"/>
            
        </div>
           

    
        </div>)
}
export default Card;