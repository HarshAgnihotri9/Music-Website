// import React, { useContext } from 'react'
import "./Render2.css";
import Comp6 from "../Comp6/Comp6";
import { useContext, useEffect, useState } from "react";
// import Render from "../RenderComp/Render"
// import Render from "../RenderComp/Render"
import UserContext from "../../Context/Usercontext";
import Render3 from "../Render3/Render3";

function Render2() {
  const { setmusic } = useContext(UserContext);
  const { setmusictittle } = useContext(UserContext);
  // let {musictittle}=useContext(UserContext);
  const {setimg}=useContext(UserContext);

  const { flagg } = useContext(UserContext);
  const { setflagg } = useContext(UserContext);

  // const[num,setnum]=useState(0);

  useEffect(() => {});

  const handleme = async () => {
    // let num=0;

    // console.log("hiiii");
    await setmusic("music/Trending/Admiring.mp3");
    await setmusictittle("Admiring");
    setflagg(0);
     await setimg("img/pause.svg")
    
    // await  setnum((num) => num+1 );
    //  setmu((mu)=>{mu+1
  };
  const handleme2 = async () => {
    await setmusic("music/Trending/MeriSau.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Meri Sau");
    setflagg(0);
    setimg("img/pause.svg")

  };

  const handleme3 = async () => {
    await setmusic("music/Trending/Shoorveer-3.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Shoorveer3");
    setflagg(0);
    setimg("img/pause.svg")

  };
  const handleme4 = async () => {
    await setmusic("music/Trending/Srivali.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Srivali");
    setflagg(0);
    setimg("img/pause.svg")

  };
  const handleme5 = async () => {
    await setmusic("music/Trending/ZaraTasveer.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("ZaraTasveerSeTU");
    setflagg(0);
    setimg("img/pause.svg")

  };
  const handleme6 = async () => {
    await setmusic("music/Trending/VeKamleya.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("VeKamleya");
    setflagg(0);
    setimg("img/pause.svg")

  };
  const handleme7 = async () => {
    await setmusic("music/Trending/Mohobat.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Mohobat Barsa Dena Tum");
    setflagg(0);
    setimg("img/pause.svg")

  };
  const handleme8 = async () => {
    await setmusic("music/Trending/Teri-Main-Hogayi.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Teri-Main-Hogayi");
    setflagg(0);
    setimg("img/pause.svg")
    


  };
  const handleme9 = async () => {
    await setmusic("music/Trending/Arjan-Vailly.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Arjan-Vailly");
    setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme10 = async () => {
    await setmusic("music/Trending/Tu-Hi-Ye-Mujhko-Bata-De.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Tu-Hi-Ye-Mujhko-Bata-De");
    setimg("img/pause.svg")

    setflagg(0);
  };
 
 

  return (
    // <div>Render</div>
    <>
     <div className="heading"> 
    
    <h3 style={{fontSize:'100%' , paddingLeft:'0',marginLeft:"0"}}>
     Famous trending Songs
    </h3>
   
   </div>

      <div className="Render" style={{marginTop:'-10px'}} >
        <div className="one" onClick={handleme}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft1/168_4.jpg"
        
          />
        </div>
        <div className="render2" onClick={handleme2}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft3/1394_4.jpg"
        
          />
        </div>
        <div className="render3" onClick={handleme3} >
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft4/1594_4.jpg"
            // music="music/gift.mp3"
          />
        </div>
        <div className="render4" onClick={handleme4}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft2/571_4.jpg"
          />
        </div>
        <div className="render5" onClick={handleme5}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft2/866_4.jpg"
            music="music/JaiShreeRam.mp3"
          />
        </div>
        <div className="render6" onClick={handleme6}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft2/588_4.jpg"
            // music="music/behindyou.mp3"
          />
        </div>
        <div className="render7" onClick={handleme7}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft3/1313_4.jpg"
            // music="music/kaisehua.mp3"
          />
        </div>
        <div className="render8" onClick={handleme8}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft1/164_4.jpg"
            // music="music/yehjism.mp3"
          />
        </div>
        <div className="render9" onClick={handleme9}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft2/834_4.jpg"
            music="music/khushikpal.mp3"
          />
        </div>
        <div className="render10" onClick={handleme10}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft4/1611_4.jpg"
            music="music/tmkobarishpsndhai.mp3"
          />
        </div>
      </div>
      <Render3/>
      {/* <Render/> */}
      
    </>
  );
}

export default Render2;
