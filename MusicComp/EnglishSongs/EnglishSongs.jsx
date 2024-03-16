// import React, { useContext } from 'react'
import "./EnglishSongs.css";
import Comp6 from "../../Components/Comp6/Comp6";
// import Comp6 from "../Comp6/Comp6";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../Context/Usercontext";
import EnglishSongs2 from "./EnglishSongs2";
// import EnglishSongs2 from "./EnglishSongs2";
// import Render2 from "../Render2.js/Render2";
// import Render2 from "../../Components/Render2.js/Render2";
// import EnglishSongs2 from "./EnglishSongs2";

function EnglishSongs() {
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
    await setmusic("music/EnglishSongs/Imnandi lento-(PagalWorld).mp3");
    await setmusictittle("Imnandi lento");
    setflagg(0);
    await setimg("img/pause.svg")

    // await  setnum((num) => num+1 );
    //  setmu((mu)=>{mu+1
  };
  const handleme2 = async () => {
    await setmusic("music/EnglishSongs/Love Me Again-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Love Me Again");
    await setimg("img/pause.svg")

    setflagg(0);
  };

  const handleme3 = async () => {
    await setmusic("music/EnglishSongs/Love Me Like You Do-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Love Me Like You Do");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme4 = async () => {
    await setmusic("music/EnglishSongs/Rainy Days-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Rainy Days");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme5 = async () => {
    await setmusic("music/EnglishSongs/Somewhere Only We Know-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Somewhere Only We Know");
    setflagg(0);
    await setimg("img/pause.svg")

  };
  const handleme6 = async () => {
    await setmusic("music/EnglishSongs/Everything Hits Me At Once-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Everything Hits Me At Once ");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme7 = async () => {
    await setmusic("music/EnglishSongs/Attention-(PagalWorld).mp3");
    await setmusictittle("Attention");
    await setimg("img/pause.svg")

    // console.log("hiiiiiljl");
    setflagg(0);
  };
  const handleme8 = async () => {
    await setmusic("music/EnglishSongs/Moje More-(PagalWorld).mp3");
    await setimg("img/pause.svg")

    // console.log("hiiiiiljl");
    await setmusictittle("Moje More");
    setflagg(0);
  };
  const handleme9 = async () => {
    await setmusic("music/EnglishSongs/Unstoppable-(PagalWorld).mp3");
    await setimg("img/pause.svg")

    // console.log("hiiiiiljl");
    await setmusictittle("Unstoppable");
    setflagg(0);
  };
  const handleme10 = async () => {
    await setmusic("music/EnglishSongs/Middle Of The Night-(PagalWorld).mp3");
    await setimg("img/pause.svg")

    // console.log("hiiiiiljl");
    await setmusictittle("Middle Of The Night");
    setflagg(0);
  };
 
 

  return (
    // <div>Render</div>
    <>
     <div className="heading"> 
    
    <h3 style={{fontSize:'100%' , paddingLeft:'0'}}>
     Top trending  English Songs
    </h3>
   
   </div>

      <div className="Render" >
        <div className="one" onClick={handleme}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft3/1159_resize2x_250x250.webp"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render2" onClick={handleme2}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/460_resize2x_250x250.webp"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render3" onClick={handleme3} >
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/328_resize2x_250x250.webp"
            music="music/gift.mp3"
          />
        </div>
        <div className="render4" onClick={handleme4}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/470_resize2x_250x250.webp"
            music="music/khadahuaajbhevhi.mp3"
          />
        </div>
        <div className="render5" onClick={handleme5}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft2/838_resize2x_250x250.webp"
            music="music/JaiShreeRam.mp3"
          />
        </div>
        <div className="render6" onClick={handleme6}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft3/1376_resize2x_250x250.webp"
            music="music/behindyou.mp3"
          />
        </div>
        <div className="render7" onClick={handleme7}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/438_resize2x_250x250.webp"
            music="music/kaisehua.mp3"
          />
        </div>
        <div className="render8" onClick={handleme8}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft3/1281_resize2x_250x250.webp"
            music="music/yehjism.mp3"
          />
        </div>
        <div className="render9" onClick={handleme9}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft2/905_resize2x_250x250.webp"
            music="music/khushikpal.mp3"
          />
        </div>
        <div className="render10" onClick={handleme10}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft5/2025_resize2x_250x250.webp"
            music="music/tmkobarishpsndhai.mp3"
          />
        </div>
      </div>

    <EnglishSongs2/>
    </>
  );
}

export default EnglishSongs;
