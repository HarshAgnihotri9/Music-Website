import  { useState, useEffect } from "react";
import "./Comp1.css";
import Comp2 from "../Comp2/Comp2";

function Comp1() {
  const [repp, setrepp] = useState({
    visibility:"hidden",
  });
  const [width, setwidth] = useState(window.innerWidth);
  const [flag, setflag] = useState(0);
  const [fla, setfla] = useState(0);

  const [rep,setrep]=useState({display:'none'})

    var btn =document.querySelector('.right ul')



  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    
  });
   
  // if(width<500){
  //   HandleClick();
  //   HandleClick();
  // }

    // useEffect(()=>{
    //   if(width<750){
    //     HandleClick()
    //     HandleClick()
    //   }
    // })

    

  useEffect(() => {
    if (width < 870 && flag == 0) {

      setrepp({ visibility:"hidden",display:"none" });
      setflag(1);
    }
    if (width > 870 && flag == 1) {
      setrepp({ visibility:"inherit",display:"block" });
      setflag(0);
    }
    
  }, [width]);

//   useEffect(() => {
//     if(window.innerWidth<750){
//         setrepp({display:"flex"})
//     }
//   })

  function HandleClick() {
   
    if(width<750 && flag==0){
       setrepp({display:"none"})
       setflag(1);
    }
    if(width<750 && flag==1){
        setrepp({display:"block"})
        setflag(0);
    }
    if ( width>750 && flag == 0) {
      setrepp({ visibility:"hidden" });
      setflag(1);
    }
    if ( width>750 && flag == 1) {
      setrepp({ visibility:"inherit" });
      setflag(0);
    }
    if(flag==1){
      btn.style.position="inherit"
      
    }
    if(flag==0){
      btn.style.position="absalute"
    }
    
  }
  function handleonClick(){
    if(fla==0){
      setrep({display:'block'})
      setfla(1)
    }
    if(fla==1){
      setrep({display:'none'})
      setfla(0)
    }
  }
  

  return (
    <>
      <div className="main">
        <div className="left">
          <h3>Harshify</h3>
        </div>
        <div className="right">
          <ul style={{position:repp.position}}>
            <li style={{ visibility:repp.visibility,display:repp.display}}>
              <a href="" >
                Home
              </a>
            </li>
            <li style={{ visibility:repp.visibility,display:repp.display}}>
              <a href="" >
                Search
              </a>
            </li>
            <li  style={{ visibility:repp.visibility,display:repp.display}}>
              <a href="">
                Pricing
              </a>
            </li>
            <li style={{ visibility:repp.visibility,display:repp.display}}>
              <a href="" >
                Contact
              </a>
            </li>
            <li style={{ visibility:repp.visibility,display:repp.display}}>
              <a href="" >
                More
              </a>
            </li>
            <button style={{ visibility:repp.visibility,display:repp.display}}> Login/Signup</button>
            <div className="img">

            <img src="img/CVV.png" onClick={HandleClick} alt="" />
            <img src="img/search.png" alt="" style={{marginLeft:"5vw"}} onClick={handleonClick} />
            </div>
          </ul>
        </div>
      </div>
      <div className="comp2" style={{display:rep.display}} >
      <Comp2/>
      </div>
        
    </>
  );
}

export default Comp1;
