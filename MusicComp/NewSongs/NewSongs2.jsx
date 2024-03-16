// import React, { useContext } from 'react'
import "./NewSongs2.css";
import Comp6 from "../../Components/Comp6/Comp6";
// import Comp6 from "../Comp6/Comp6";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../Context/Usercontext";
// import Render2 from "../Render2.js/Render2";
// import Render2 from "../../Components/Render2.js/Render2";
// import NewSongs2 from "./NewSongs2";

function NewSongs2() {
  const { setmusic } = useContext(UserContext);
  const { setmusictittle } = useContext(UserContext);
  // let {musictittle}=useContext(UserContext);
//   const { flagg } = useContext(UserContext);
  const { setflagg } = useContext(UserContext);
  const {setimg}=useContext(UserContext)

  // const[num,setnum]=useState(0);

  useEffect(() => {});

  const handleme = async () => {
    // let num=0;

    // console.log("hiiii");
    await setmusic("music/NewSongs/Kabhi Shaam Dhale-(PagalWorld).mp3");
    await setmusictittle("Kabhi Shaam Dhale-(PagalWorld) ");
    setflagg(0);
    await setimg("img/pause.svg")

    // await  setnum((num) => num+1 );
    //  setmu((mu)=>{mu+1
  };
  const handleme2 = async () => {
    await setmusic("music/NewSongs/Tum Jo Aaye Yaara To Barsaat Aa Gayi-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Tum Jo Aaye Yaara To Barsaat Aa Gayi");
    setflagg(0);
    await setimg("img/pause.svg")
    
  };

  const handleme3 = async () => {
    await setmusic("music/NewSongs/Lut Gaye-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Lut Gaye");
    setflagg(0);
    await setimg("img/pause.svg")

  };
  const handleme4 = async () => {
    await setmusic("music/NewSongs/Manmarziyan-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Manmarziyan");
    setflagg(0);
    await setimg("img/pause.svg")

  };
  const handleme5 = async () => {
    await setmusic("music/NewSongs/Aao Na-(PagalWorld).mp3");
    await setmusictittle("Aao Na ");
    setflagg(0);
    await setimg("img/pause.svg")

  };
  const handleme6 = async () => {
    await setmusic("music/NewSongs/Mode Nal Moda-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Mode Nal Moda");
    setflagg(0);
    await setimg("img/pause.svg")

  };
  const handleme7 = async () => {
    await setmusic("music/NewSongs/Tu Meri Aashiqui-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Tu Meri Aashiqui");
    setflagg(0);
    await setimg("img/pause.svg")

  };
  const handleme8 = async () => {
    await setmusic("music/NewSongs/Dekho Dekho Kaise Baatein Yaha Ki-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Dekho Dekho Kaise Baatein Yaha Ki ");
    setflagg(0);
    await setimg("img/pause.svg")

  };
  const handleme9 = async () => {
    await setmusic("music/NewSongs/Shiv Sama Rahe Mujhme-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Shiv Sama Rahe Mujhme");
    setflagg(0);
    await setimg("img/pause.svg")

  };
  const handleme10 = async () => {
    await setmusic("music/NewSong/Teri Kasam Bilkul Sidhi Sadhi Thi Main-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Teri Kasam Bilkul Sidhi Sadhi Thi Main-(PagalWorld)");
    setflagg(0);
    await setimg("img/pause.svg")

  };
 
 

  return (
    // <div>Render</div>
    <>

<div className="heading"> 
    
    <h3 style={{fontSize:'100%' , paddingLeft:'0'}}>
     Latest Songs
    </h3>
   
   </div>
      <div className="Render" style={{marginTop:'-10px'}} >
        <div className="one" onClick={handleme}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft4/1713_resize2x_250x250.webp"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render2" onClick={handleme2}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/211_resize2x_250x250.webp"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render3" onClick={handleme3} >
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft3/1382_resize2x_250x250.webp"
            music="music/gift.mp3"
          />
        </div>
        <div className="render4" onClick={handleme4}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft5/2171_resize2x_250x250.webp"
            music="music/khadahuaajbhevhi.mp3"
          />
        </div>
        <div className="render5" onClick={handleme5}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft5/2108_resize2x_250x250.webp"
            music="music/JaiShreeRam.mp3"
          />
        </div>
        <div className="render6" onClick={handleme6}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft5/2174_resize2x_250x250.webp"
            music="music/behindyou.mp3"
          />
        </div>
        <div className="render7" onClick={handleme7}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/340_resize2x_250x250.webp"
            music="music/kaisehua.mp3"
          />
        </div>
        <div className="render8" onClick={handleme8}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft5/2172_resize2x_250x250.webp"
            music="music/yehjism.mp3"
          />
        </div>
        <div className="render9" onClick={handleme9}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft5/2177_resize2x_250x250.webp"
            music="music/khushikpal.mp3"
          />
        </div>
        <div className="render10" onClick={handleme10}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft2/576_resize2x_250x250.webp"
            music="music/tmkobarishpsndhai.mp3"
          />
        </div>
      </div>

      {/* <NewSongs2/> */}
    </>
  );
}

export default NewSongs2;
