// import React, { useContext } from 'react'
import "./OldSongs2.css";
import Comp6 from "../../Components/Comp6/Comp6";
// import Comp6 from "../Comp6/Comp6";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../Context/Usercontext";
// import Render2 from "../Render2.js/Render2";
// import Render2 from "../../Components/Render2.js/Render2";
// import Render3 from "../../Components/Render3/Render3";
import OldSongs3 from "./old songs3";

function OldSongs2() {
  const { setmusic } = useContext(UserContext);
  const { setmusictittle } = useContext(UserContext);
  // let {musictittle}=useContext(UserContext);
  const { flagg } = useContext(UserContext);
  const { setflagg } = useContext(UserContext);
  const{setimg}=useContext(UserContext)

  // const[num,setnum]=useState(0);

  useEffect(() => {});

  const handleme = async () => {
    // let num=0;

    // console.log("hiiii");
    await setmusic("music/OldSongs/Chahto Ka Maza Faslo Me Nahi-(PagalWorld).mp3");
    await setmusictittle("Chahto Ka Maza Faslo Me Nahi");
    await setimg("img/pause.svg")

    setflagg(0);
    // await  setnum((num) => num+1 );
    //  setmu((mu)=>{mu+1
  };
  const handleme2 = async () => {
    await setmusic("music/OldSongs/Zaroori Tha-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Zaroori Tha ");
    await setimg("img/pause.svg")

    setflagg(0);
  };

  const handleme3 = async () => {
    await setmusic("music/OldSongs/Sochta Hoon Ke Wo Kitne Masoom The-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Sochta Hoon Ke Wo Kitne Masoom The");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme4 = async () => {
    await setmusic("music/OldSongs/Chura Ke Dil Mera-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Chura Ke Dil Mera");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme5 = async () => {
    await setmusic("music/OldSongs/Agar Tum Mil Jao-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Agar Tum Mil Jao ");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme6 = async () => {
    await setmusic("music/OldSongs/Yaad Aa Raha Hai Tera Pyar-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Yaad Aa Raha Hai Tera Pyar");
    setflagg(0);
    await setimg("img/pause.svg")

  };
  const handleme7 = async () => {
    await setmusic("music/OldSongs/Sab Kuch Bhula Diya-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Sab Kuch Bhula Diya");
    setflagg(0);
    await setimg("img/pause.svg")

  };
  const handleme8 = async () => {
    await setmusic("music/OldSongs/Nainowale Ne-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Nainowale Ne");
    setflagg(0);
    await setimg("img/pause.svg")

  };
  const handleme9 = async () => {
    await setmusic("music/OldSongs/Ek Ladki Ko Dekha To Aisa Laga-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Ek Ladki Ko Dekha To Aisa Laga");
    setflagg(0);
    await setimg("img/pause.svg")

  };
  const handleme10 = async () => {
    await setmusic("music/OldSongs/Chitthi Aai Hai-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Chitthi Aai Hai");
    setflagg(0);
    await setimg("img/pause.svg")

  };
 
 

  return (
    // <div>Render</div>
    <>


<div className="heading"> 
    
    <h3 style={{fontSize:'100%' , paddingLeft:'0' }}>
     Mid old Songs
    </h3>
   
   </div>
      <div className="Render" style={{marginTop:"-10px"}} >
        <div className="one" onClick={handleme}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/420_resize2x_250x250.webp"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render2" onClick={handleme2}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/97_resize2x_250x250.webp"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render3" onClick={handleme3} >
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft2/810_resize2x_250x250.webp"
            music="music/gift.mp3"
          />
        </div>
        <div className="render4" onClick={handleme4}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/21_resize2x_250x250.webp"
            music="music/khadahuaajbhevhi.mp3"
          />
        </div>
        <div className="render5" onClick={handleme5}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft4/1539_resize2x_250x250.webp"
            music="music/JaiShreeRam.mp3"
          />
        </div>
        <div className="render6" onClick={handleme6}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft2/882_resize2x_250x250.webp"
            music="music/behindyou.mp3"
          />
        </div>
        <div className="render7" onClick={handleme7}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft4/1704_resize2x_250x250.webp"
            music="music/kaisehua.mp3"
          />
        </div>
        <div className="render8" onClick={handleme8}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/23_resize2x_250x250.webp"
          />
        </div>
        <div className="render9" onClick={handleme9}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft2/895_resize2x_250x250.webp"
          />
        </div>
        <div className="render10" onClick={handleme10}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft5/2105_resize2x_250x250.webp"
          />
        </div>
      </div>
      {/* <Render3/> */}
      <OldSongs3/>

      {/* <Render2/> */}
    </>
  );
}

export default OldSongs2;
