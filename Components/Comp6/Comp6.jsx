import { useState,useEffect } from 'react';
import Comp4 from '../Comp4/Comp4'
import './Comp6.css'

function Comp6(props) {

  const [width,setwidth]=useState({display:'none',visibility:'hidden'})    

  const  handleMouseover=()=>{

    // setwidth({display:'block'})
    // e.stopPropogation();
   
    setwidth({visibility:'inherit'})



  }
  const  handleMouseleave=()=>{
    // setwidth({display:'none'})
    setwidth({visibility:'hidden'})

  

   
  }
 
  return (
    <>
    <div className="mainnnnnn">

  <img className='ig' src= {props.img} alt="" onMouseOver={handleMouseover} onMouseLeave={handleMouseleave} />
  <div className="img2">

  <img   className="play" src="img/play.svg" alt="" style={{visibility:width.visibility, opacity:width.opacity}  } />
  </div>
  


    </div>
    
    
    </>
  )
}

export default Comp6