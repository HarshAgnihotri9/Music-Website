import React ,{useState} from 'react'
import './Compp6.css'

function Compp6(props) {
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
    const  handlemove=()=>{
      setwidth({display:'block'})
      // setwidth({opacity:2})
      
               
    }

    const HandleClick=()=>{
       
    }
    return (
      <>
      <div className="maiinnnnnn">
  
    <img className='ig' src= {props.img} alt="" onMouseOver={handleMouseover} onMouseLeave={handleMouseleave} onClick={HandleClick} />
   


    <div className="img2">
  
    <img  onMouseOver={handlemove} className="play" src="img/play.svg" alt="" style={{visibility:width.visibility, opacity:width.opacity}  } />
    </div>
    
  
  
      </div>
      
      
      </>
    )
  }
  

export default Compp6