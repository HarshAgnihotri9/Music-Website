// import React, { useContext } from 'react'
import "./NewSongs.css";
import Comp6 from "../../Components/Comp6/Comp6";
// import Comp6 from "../Comp6/Comp6";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../Context/Usercontext";
import NewSongs2 from "./NewSongs2";
// import Render2 from "../Render2.js/Render2";
// import Render2 from "../../Components/Render2.js/Render2";
// import NewSongs2 from "./NewSongs2";

function NewSongs() {
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
    await setmusic("music/NewSongs/Babam Bam-(PagalWorld).mp3");
    await setmusictittle("Babam Bam ");
    setflagg(0);
    await setimg("img/pause.svg")

    // await  setnum((num) => num+1 );
    //  setmu((mu)=>{mu+1
  };
  const handleme2 = async () => {
    await setmusic("music/NewSongs/Tujhe Waqt Badalna Hai-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Tujhe Waqt Badalna Hai");
    await setimg("img/pause.svg")

    setflagg(0);
  };

  const handleme3 = async () => {
    await setmusic("music/NewSongs/Ae Watan Mere Watan (Title Track)-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Ae Watan Mere Watan ");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme4 = async () => {
    await setmusic("music/NewSongs/Tumhe Kitna Pyaar Karte (Bawaal)-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Tumhe Kitna Pyaar Karte ");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme5 = async () => {
    await setmusic("music/NewSongs/Tu Hai To Mujhe Kya Chahiye-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Tu Hai To Mujhe Kya Chahiye-(PagalWorld)");
    setflagg(0);
    await setimg("img/pause.svg")

  };
  const handleme6 = async () => {
    await setmusic("music/NewSongs/Sab Kuch Hi Mita Denge-(PagalWorld).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Sab Kuch Hi Mita Denge ");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme7 = async () => {
    await setmusic("music/NewSongs/Maine Tera Naam Dil Rakh Diya-(PagalWorld).mp3");
    await setimg("img/pause.svg")

    // console.log("hiiiiiljl");
    await setmusictittle("Maine Tera Naam Dil Rakh Diya");
    setflagg(0);
  };
  const handleme8 = async () => {
    await setmusic("music/NewSongs/Tumhare Badan Ki Mehek-(PagalWorld).mp3");
    await setimg("img/pause.svg")

    // console.log("hiiiiiljl");
    await setmusictittle("Tumhare Badan Ki Mehek");
    setflagg(0);
  };
  const handleme9 = async () => {
    await setmusic("music/NewSongs/Tere Sang Ishq Hua-(PagalWorld).mp3");
    await setimg("img/pause.svg")

    // console.log("hiiiiiljl");
    await setmusictittle("Tere Sang Ishq Hua");
    setflagg(0);
  };
  const handleme10 = async () => {
    await setmusic("music/NewSong/Chaliya Jawan-(PagalWorld).mp3");
    await setimg("img/pause.svg")

    // console.log("hiiiiiljl");
    await setmusictittle("Chaliya Jawan");
    setflagg(0);
  };
 
 

  return (
    // <div>Render</div>
    <>
  <div className="heading"> 
    
    <h3 style={{fontSize:'100%' , paddingLeft:'0'}}>
     New  Songs
    </h3>
   
   </div>

      <div className="Render" >
        <div className="one" onClick={handleme}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/491_resize2x_250x250.webp"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render2" onClick={handleme2}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/190_resize2x_250x250.webp"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render3" onClick={handleme3} >
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft5/2175_resize2x_250x250.webp"
            music="music/gift.mp3"
          />
        </div>
        <div className="render4" onClick={handleme4}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/245_resize2x_250x250.webp"
            music="music/khadahuaajbhevhi.mp3"
          />
        </div>
        <div className="render5" onClick={handleme5}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft1/5_resize2x_250x250.webp"
            music="music/JaiShreeRam.mp3"
          />
        </div>
        <div className="render6" onClick={handleme6}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft4/1795_resize2x_250x250.webp"
            music="music/behindyou.mp3"
          />
        </div>
        <div className="render7" onClick={handleme7}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft2/571_resize2x_250x250.webp"
            music="music/kaisehua.mp3"
          />
        </div>
        <div className="render8" onClick={handleme8}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft5/2037_resize2x_250x250.webp"
            music="music/yehjism.mp3"
          />
        </div>
        <div className="render9" onClick={handleme9}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft5/2176_resize2x_250x250.webp"
            music="music/khushikpal.mp3"
          />
        </div>
        <div className="render10" onClick={handleme10}>
          <Comp6
            img="https://pagalworld.cool/siteuploads/thumb/sft2/530_resize2x_250x250.webp"
            music="music/tmkobarishpsndhai.mp3"
          />
        </div>
      </div>

    <NewSongs2/>
    </>
  );
}

export default NewSongs;
