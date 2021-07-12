import {useState} from "react";
import FoodCard from "./FoodCard"
// var arr = [];
// clickMe = (foodname) => {
//     this.foodname.clickMe()
// }

// clickMe = (event) => {
//     this.props.clickMe(event.target.value)
// }
const Edit=(props)=>{
const [foodname, setFoodname]= useState("");
const [calorie, setCalorie]= useState("0");


    
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
                <button onClick={() => props.noClickMe()}>No, Click Me!</button>
            </div>
        </form> 
         
    )   
}
function App(){
    return(
    <div className="main">
      <div className="classContainer">
        <FoodCard foodkanaam=submit cal ="69"  />       
      </div>
      <div className="editContainer">
        <Edit/>
      </div>
     
      
    </div>)
    }
export default App;
