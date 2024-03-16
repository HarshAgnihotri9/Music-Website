import { useState } from "react";
import "./Comp2.css" ;

function Comp2() {
     const [search,setsearch]=useState("")

     function handleClick(){
        console.log(search);
     }

  return (
    <>
    <div className="mainn">

    <input type="text" onChange={ (e)=>{ setsearch(e.target.value)}} />
    <button onClick={handleClick}>Search</button>
    </div>
    
    </>
  )
}

export default Comp2