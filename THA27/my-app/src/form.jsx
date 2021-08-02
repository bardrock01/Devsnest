import { useState } from "react";
import {useDispatch} from "react-redux"
import { TodoActionAdd } from "./reducerthings/To-doaction";

const Form = ()=>{

    const dispatch = useDispatch();
    const [item,setItem]=useState("");

    return <div className="form-container">
        <div className="form">
            <div className="inpt">
                <input placeholder="Click on Add button to start start adding " onChange={(e)=>{setItem(e.target.value)}} value={item}></input>
            </div>
            <div className="btn">
                <button onClick={()=>{setItem("");
                if(item){
                    dispatch(TodoActionAdd({
                        title:item,
                        done:false
                    }))
                }}}>Add</button>
            </div>
        </div>
    </div>
}

export default Form;