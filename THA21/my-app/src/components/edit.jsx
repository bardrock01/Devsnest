import {useState} from "react";
import FoodCard from "./FoodCard"


    


function Edit(props){
    const [foodname,  setFoodname]= useState("");
    const [calorie,  setCalorie]= useState("");
    
    return(

        <form>
            <label>
                <input type="text" value={foodname} name="foodname" onChange={e=> setFoodname(e.target.value)} 
                
                />
            </label><br/>

            <label>
                <input type="number" value={calorie} name="calorie" onChange={e=> setCalorie(e.target.value)}/>
            </label>

            <div className="addbtn">
                <button type="submit" onClick={()=>{props.foodkanaam(foodname)}} >No, Click Me!</button>
            </div>
        </form> 
         
    )   
}
function App(){
    const arrayAdd=(foodname)=>{
        console.log(foodname)
        return({
             khaneKaNaam:foodname
        })
    }
    return(
    <div className="main">
      <div className="classContainer">
        <FoodCard  foodkanaam="sankalp />
      </div>
      <div className="editContainer">
        <Edit/>
      </div>
     
      
    </div>)
    }
export default App;
