// import React, { useContext } from 'react'
import "./Render.css";
import Comp6 from "../Comp6/Comp6";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../Context/Usercontext";
import Render2 from "../Render2.js/Render2";

function Render() {
  const { setmusic } = useContext(UserContext);
  const { setmusictittle } = useContext(UserContext);
  // let {musictittle}=useContext(UserContext);
  const { flagg } = useContext(UserContext);
  const { setflagg } = useContext(UserContext);
  const {setimg} =useContext(UserContext)

  // const[num,setnum]=useState(0);

  useEffect(() => {});

  const handleme = async () => {
    // let num=0;

    // console.log("hiiii");
    await setmusic("music/Trending/ekbar.mp3");
    await setmusictittle("pyar hota kai bar hai");
    setflagg(0);
    setimg("img/pause.svg")

    // await  setnum((num) => num+1 );
    //  setmu((mu)=>{mu+1
  };
  const handleme2 = async () => {
    await setmusic("music/Trending/tmne.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("khwb me aake pyar karta hae");
    setflagg(0);
    setimg("img/pause.svg")

  };

  const handleme3 = async () => {
    await setmusic("music/Trending/gift.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Gift");
    setflagg(0);
    setimg("img/pause.svg")

  };
  const handleme4 = async () => {
    await setmusic("music/Trending/khadahuaajbhevhi.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("khada Hu Aaj Bhe Vhi");
    setflagg(0);
    setimg("img/pause.svg")

  };
  const handleme5 = async () => {
    await setmusic("music/Trending/JaiShreeRam.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Jai Shree Ram");
    setflagg(0);
    setimg("img/pause.svg")

  };
  const handleme6 = async () => {
    await setmusic("music/Trending/behindyou.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Behind You");
    setflagg(0);
    setimg("img/pause.svg")

  };
  const handleme7 = async () => {
    await setmusic("music/Trending/kaisehua.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("kaise Hua");
    setflagg(0);
    setimg("img/pause.svg")

  };
  const handleme8 = async () => {
    await setmusic("music/Trending/yehjism.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Yeh Jism Hai to kya");
    setflagg(0);
    setimg("img/pause.svg")

  };
  const handleme9 = async () => {
    await setmusic("music/Trending/khushikpal.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("khushi K Pal");
    setflagg(0);
    setimg("img/pause.svg")

  };
  const handleme10 = async () => {
    await setmusic("music/Trending/tmkobarishpsndhai.mp3");
    // console.log("hiiiiiljl");
    await setmusictittle("Tumko Barish Pasand hai");
    setflagg(0);
    setimg("img/pause.svg")

  };
 
 

  return (
    // <div>Render</div>
    <>

    <div className="heading"> 
    
     <h3 style={{fontSize:'100%' , paddingLeft:'0'}}>
      Top trending Songs
     </h3>
    
    </div>

      <div className="Render" >
        <div className="one" onClick={handleme}>
          <Comp6
            img="https://i.ytimg.com/vi/HZsRjrYW-lk/maxresdefault.jpg"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render2" onClick={handleme2}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft3/1384_4.jpg"
            music="music/ekbar.mp3"
          />
        </div>
        <div className="render3" onClick={handleme3} >
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft4/1713_4.jpg"
            music="music/gift.mp3"
          />
        </div>
        <div className="render4" onClick={handleme4}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft4/1659_4.jpg"
            music="music/khadahuaajbhevhi.mp3"
          />
        </div>
        <div className="render5" onClick={handleme5}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft1/55_4.jpg"
            music="music/JaiShreeRam.mp3"
          />
        </div>
        <div className="render6" onClick={handleme6}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft1/129_4.jpg"
            music="music/behindyou.mp3"
          />
        </div>
        <div className="render7" onClick={handleme7}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft2/924_4.jpg"
            music="music/kaisehua.mp3"
          />
        </div>
        <div className="render8" onClick={handleme8}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft2/770_4.jpg"
            music="music/yehjism.mp3"
          />
        </div>
        <div className="render9" onClick={handleme9}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft3/1312_4.jpg"
            music="music/khushikpal.mp3"
          />
        </div>
        <div className="render10" onClick={handleme10}>
          <Comp6
            img="https://pagalnew.com.se/siteuploads/thumb/sft1/173_4.jpg"
            music="music/tmkobarishpsndhai.mp3"
          />
        </div>
      </div>

      <Render2/>
    </>
  );
}

export default Render;
