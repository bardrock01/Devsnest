import { useState } from 'react';
function App2() 
{
    var [num, setNum]=useState(0);
    function sum()
    {
      setNum(num=num+1);
    }
    return (
    
      <button className="btn" onClick={sum}>{num} </button>
  
    )
}
export default App2