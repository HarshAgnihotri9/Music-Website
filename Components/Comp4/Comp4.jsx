import { useEffect, useState,useContext } from "react";
import userContext from "../../Context/Usercontext";
import "./Comp4.css";
function Comp4(props) {
  const [imgwidth,setwidth]=useState(0);
  const {setuser}=useContext(userContext);
  const[width,setwiddth]=useState(0)

  useEffect(() => {
    const handleResize = () => {
      setwiddth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    
  });

useEffect(()=>{
  let img=document.querySelector('.banner-image')
    setwidth(img.clientWidth);
    setuser({imgwidth});
    // console.log(width);
    
},[imgwidth,setuser,width])  


  return (
    <>
      <div className="mainnnn">
        {/* <div className="container"> */}
          <div className="wrapper" style={{marginBottom:0}}>
            <div className="banner-image">
              <img src={props.img} alt="" />
            </div>
            {/* <h1> Toyota Supra</h1> */}
            {/* <p>Lorem ipsum dolor sit amet, <br/>
     consectetur adipiscing elit.</p> */}
          </div>
          {/* <div className="button-wrapper"> 
  <button className="btn outline">DETAILS</button>
    <button className="btn fill">SHOW</button>
  </div> */}
        </div>
      {/* </div> */}
      
    </>
  );
}



export default Comp4;
