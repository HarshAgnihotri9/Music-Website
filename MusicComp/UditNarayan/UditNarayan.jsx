// import React, { useContext } from 'react'
import "./UditNarayan.css";
import Comp6 from "../../Components/Comp6/Comp6";
// import Comp6 from "../Comp6/Comp6";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../Context/Usercontext";
// import Render2 from "../Render2.js/Render2";
import Render2 from "../../Components/Render2.js/Render2";

function Udit() {
  const { setmusic } = useContext(UserContext);
  const { setmusictittle } = useContext(UserContext);
  // let {musictittle}=useContext(UserContext);
  const { flagg } = useContext(UserContext);
  const { setflagg } = useContext(UserContext);

  // const[num,setnum]=useState(0);

  useEffect(() => {});

  const handleme = async () => {
    // let num=0;

    // console.log("hiiii");
    await setmusic("music/UditNarayan/Tujhe Pyaar Karoon Sau Bara [128 Kbps]-(SongsPk.com.se).mp3");
    await setmusictittle("Tujhe Pyaar Karoon Sau Bara ");
    setflagg(0);
    // await  setnum((num) => num+1 );
    //  setmu((mu)=>{mu+1
  };
  const handleme2 = async () => {
    await setmusic("music/UditNarayan/Barson Ke Baad [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Barson Ke Baad ");
    setflagg(0);
  };

  const handleme3 = async () => {
    await setmusic("music/UditNarayan/Haseeno Ko Aate Hain [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Haseeno Ko Aate Hain");
    setflagg(0);
  };
  const handleme4 = async () => {
    await setmusic("music/UditNarayan/Hum Bhi Tum Bhi [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Hum Bhi Tum Bhi ");
    setflagg(0);
  };
  const handleme5 = async () => {
    await setmusic("music/UditNarayan/Sard Thandi Hawayein [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Sard Thandi Hawayein");
    setflagg(0);
  };
  const handleme6 = async () => {
    await setmusic("music/UditNarayan/Kya Karte They Sajna [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Kya Karte They Sajna");
    setflagg(0);
  };
  const handleme7 = async () => {
    await setmusic("music/UditNarayan/Aawara Aawara [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Aawara Aawara");
    setflagg(0);
  };
  const handleme8 = async () => {
    await setmusic("music/UditNarayan/Bin Tere Sanam (Yaara Dildara) [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Bin Tere Sanam (Yaara Dildara).mp3 ");
    setflagg(0);
  };
  const handleme9 = async () => {
    await setmusic("music/UditNarayan/Tujhe Pyaar Karoon Sau Bara [128 Kbps]-(SongsPk.com.se).mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Tujhe Pyaar Karoon Sau Bara");
    setflagg(0);
  };
  const handleme10 = async () => {
    await setmusic("music/UditNarayan/Ladki.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Ladki Hai Kya ");
    setflagg(0);
  };
 
 

  return (
    // <div>Render</div>
    <>

      <div className="Render" >
        <div className="one" onClick={handleme}>
          <Comp6
            img="https://songspk.com.se/images/loading.svg"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render2" onClick={handleme2}>
          <Comp6
            img="https://thumb.songspk.com.se/thumb/sft202/100732_4.jpg"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render3" onClick={handleme3} >
          <Comp6
            img="https://songspk.com.se/images/loading.svg"
            music="music/gift.mp3"
          />
        </div>
        <div className="render4" onClick={handleme4}>
          <Comp6
            img="https://thumb.songspk.com.se/thumb/c/2620_4.jpg"
            music="music/khadahuaajbhevhi.mp3"
          />
        </div>
        <div className="render5" onClick={handleme5}>
          <Comp6
            img="https://songspk.com.se/images/loading.svg"
            music="music/JaiShreeRam.mp3"
          />
        </div>
        <div className="render6" onClick={handleme6}>
          <Comp6
            img="https://songspk.com.se/images/loading.svg"
            music="music/behindyou.mp3"
          />
        </div>
        <div className="render7" onClick={handleme7}>
          <Comp6
            img="https://thumb.songspk.com.se/thumb/sft199/99221_4.jpg"
            music="music/kaisehua.mp3"
          />
        </div>
        <div className="render8" onClick={handleme8}>
          <Comp6
            img="https://thumb.songspk.com.se/thumb/c/10888_4.jpg"
            music="music/yehjism.mp3"
          />
        </div>
        <div className="render9" onClick={handleme9}>
          <Comp6
            img="https://songspk.com.se/images/loading.svg"
            music="music/khushikpal.mp3"
          />
        </div>
        <div className="render10" onClick={handleme10}>
          <Comp6
            img="https://songspk.com.se/images/loading.svg"
            music="music/tmkobarishpsndhai.mp3"
          />
        </div>
      </div>

      {/* <Render2/> */}
    </>
  );
}

export default Udit;
