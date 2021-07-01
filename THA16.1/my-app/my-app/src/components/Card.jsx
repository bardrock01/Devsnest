import "../style.css";

function Card(){
return(<div className="Main">
          <Row/>
          <Row/>  
          <Row/>  
          <Row/>    
          <Row/>  
          <Row/>  
          <Row/>  
          <Row/>  
         </div>
         
        )
}
function BoxCard(){
    return(
    <div className="cardContainer">
    
    
    </div>)
}
function Row(){
    return(<div className="row">
    <BoxCard/>
    <BoxCard/>
    <BoxCard/>
    <BoxCard/>
    <BoxCard/>
    <BoxCard/>
    <BoxCard/>
    <BoxCard/>

    
    </div>)
}
export default Card;
