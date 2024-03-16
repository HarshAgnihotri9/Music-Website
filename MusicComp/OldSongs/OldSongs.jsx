// import React, { useContext } from 'react'
import "./OldSongs.css";
import Comp6 from "../../Components/Comp6/Comp6";
// import Comp6 from "../Comp6/Comp6";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../Context/Usercontext";
// import Render2 from "../Render2.js/Render2";
import Render2 from "../../Components/Render2.js/Render2";
import OldSongs2 from "./OldSongs2";

function OldSongs() {
  const { setmusic } = useContext(UserContext);
  const { setmusictittle } = useContext(UserContext);
  // let {musictittle}=useContext(UserContext);
  const { flagg } = useContext(UserContext);
  const { setflagg } = useContext(UserContext);
  const {setimg}=useContext(UserContext)

  // const[num,setnum]=useState(0);

  useEffect(() => {});

  const handleme = async () => {
    // let num=0;

    // console.log("hiiii");
    await setmusic("music/OldSongs/Sard Thandi Hawayein [128 Kbps]-(SongsPk.com.se).mp3");
    await setmusictittle("Sard Thandi Hawayein");
    await setimg("img/pause.svg")

    setflagg(0);
    // await  setnum((num) => num+1 );
    //  setmu((mu)=>{mu+1
  };
  const handleme2 = async () => {
    await setmusic("music/OldSongs/Aadmi Musafir Hai Aata Hai Jata Hai [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Aadmi Musafir Hai Aata Hai Jata Hai ");
    await setimg("img/pause.svg")

    setflagg(0);
  };

  const handleme3 = async () => {
    await setmusic("music/OldSongs/Aaj Purani Raahon Se [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Aaj Purani Raahon Se");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme4 = async () => {
    await setmusic("music/OldSongs/Aaj Tu Gair Sahi [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Aaj Tu Gair Sahi");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme5 = async () => {
    await setmusic("music/OldSongs/Kitni Mohabbat Hai Mere Dil Me [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Kitni Mohabbat Hai Mere Dil Me ");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme6 = async () => {
    await setmusic("music/OldSongs/Aaine Ke Sau Tukde - Maa [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Aaine Ke Sau Tukde ");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme7 = async () => {
    await setmusic("music/OldSongs/Har Ek Muskurahat [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Har Ek Muskurahat");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme8 = async () => {
    await setmusic("music/OldSongs/Leke Pahla Pahla Pyar [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Leke Pahla Pahla Pyar");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme9 = async () => {
    await setmusic("music/OldSongs/Chhod Ke Na Ja O Piya [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Chhod Ke Na Ja O Piya [128 Kbps]-(SongsPk.com.se)");
    await setimg("img/pause.svg")

    setflagg(0);
  };
  const handleme10 = async () => {
    await setmusic("music/OldSongs/Kya Karte They Sajna [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Kya Karte They Sajna");
    setflagg(0);
    await setimg("img/pause.svg")

  };
 
 

  return (
    // <div>Render</div>
    <>

<div className="heading"> 
    
    <h3 style={{fontSize:'100%' , paddingLeft:'0'}}>
     Old is Gold
    </h3>
   
   </div>

      <div className="Render" >
        <div className="one" onClick={handleme}>
          <Comp6
            img="https://thumb.songspk.com.se/thumb/sft200/99589_4.jpg"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render2" onClick={handleme2}>
          <Comp6
            img="https://thumb.songspk.com.se/thumb/sft48/23666_4.jpg"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render3" onClick={handleme3} >
          <Comp6
            img="https://thumb.songspk.com.se/thumb/sft48/23669_4.jpg"
            music="music/gift.mp3"
          />
        </div>
        <div className="render4" onClick={handleme4}>
          <Comp6
            img="https://thumb.songspk.com.se/thumb/sft48/23670_4.jpg"
            music="music/khadahuaajbhevhi.mp3"
          />
        </div>
        <div className="render5" onClick={handleme5}>
          <Comp6
            img="https://thumb.songspk.com.se/thumb/sft199/99222_4.jpg"
            music="music/JaiShreeRam.mp3"
          />
        </div>
        <div className="render6" onClick={handleme6}>
          <Comp6
            img="https://thumb.songspk.com.se/thumb/sft48/23668_4.jpg"
            music="music/behindyou.mp3"
          />
        </div>
        <div className="render7" onClick={handleme7}>
          <Comp6
            img="https://thumb.songspk.com.se/thumb/sft199/99219_4.jpg"
            music="music/kaisehua.mp3"
          />
        </div>
        <div className="render8" onClick={handleme8}>
          <Comp6
            img="https://thumb.songspk.com.se/thumb/sft199/99218_4.jpg"
            music="music/yehjism.mp3"
          />
        </div>
        <div className="render9" onClick={handleme9}>
          <Comp6
            img="https://thumb.songspk.com.se/thumb/sft200/99588_4.jpg"
            music="music/khushikpal.mp3"
          />
        </div>
        <div className="render10" onClick={handleme10}>
          <Comp6
            img="https://thumb.songspk.com.se/thumb/sft199/99221_4.jpg"
            music="music/tmkobarishpsndhai.mp3"
          />
        </div>
      </div>

      <OldSongs2/>
    </>
  );
}

export default OldSongs;
