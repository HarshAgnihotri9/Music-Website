import React, { useContext, useEffect } from 'react'
import './MusicNav.css'
import { useState } from 'react';
import UserContext from '../../Context/Usercontext';

function MusicNav() {

    // const [width,setwidth]=useState(0)
    const [flag,setflag]=useState(0)
    const {music}=useContext(UserContext);
    // const[arr,setarr]=useState()
    const {musictittle}=useContext(UserContext);
    const {setmusictittle}=useContext(UserContext);
    const {img}=useContext(UserContext);
    const {setimg}=useContext(UserContext);

    // const {setmusic}=useContext(UserContext);
    var[musicc,setmusicc]=useState("")

    var[tittle,settittle]=useState("")

    const {flagg}=useContext(UserContext);
    const {setflagg}=useContext(UserContext);

    // const[ganna,setganna]=useState("")

     useEffect( ()=>{
        var ganna=Object.values(music) ;
        // setmusic("music/laddu.mp3")
        console.log(ganna);
        setmusicc(ganna.join(""));
        var arr=Object.values(musictittle)
        settittle(arr.join(""))
        
        // console.log("f,flagg);
        
           
     
    })
    // useEffect(()=>{ 
    //     document.querySelector('#music').play();

    // },[music])



    useEffect(()=>{
         var music=document.querySelector('#music');
         music.ontimeupdate=function(){
            console.log('playing',);

            var time=Math.floor((music.currentTime/music.duration)*100)
            var progress=document.querySelector('.progressed');
            progress.style.width= time + "%";
            // setmusic('music/laddu.mp3')
            // setganna(Object.values(music))
            // console.log(ganna);
        //    handleimg();
        
        if(flagg==0){
         document.querySelector('#music').play();
               setflag(1);
        }

            

           
         }
    });


    const handleimg=  async()=>{
        if(flag==0 || flagg==0){

            await document.querySelector('#music').play();
            // console.log("play");
            // console.log(e);
            // document.querySelector('.img img')
            setimg("img/pause.svg")
            setflag(1);
            setflagg(1)
        }
        if(flag==1 || flag==1){

            await document.querySelector('#music').pause();

            // console.log("play");
            setimg("img/play.png")


            setflag(0);
            // setflagg(0);

        }
    }

    const handleClick2=(e)=>{
        var music=document.querySelector('#music');

        var prog=document.querySelector('.progress_bar')
        // var prog_width=Math.floor(e.nativeEvent.offsetX/prog.offsetWidth);
        // console.log(e.nativeEvent.offsetX );
        // console.log(prog.offsetWidth );
        music.currentTime=(Math.floor((e.nativeEvent.offsetX/prog.offsetWidth)*music.duration))

    }
    

    
  return (
 <>
 <div className="musicmain" style={{paddingTop:'20px'}}>



 <div className="progress_bar"  onClick={handleClick2} >
    <div className="progressed" >

    </div>
</div>
<div className="sec">
    <div className="first">
         <h2>{tittle}</h2>

    </div>


<div className="img">
     
     <img src="img/backward.png" alt="" style={{width:'40px',height:'38px'}}/>

    <img src={img} alt="" style={{width:'40px',height:'40px'}} onClick={handleimg}/>
    <img src="img/forward.png" style={{width:'50px',height:'40px'}} alt="" />
</div>
<div className="last">
    <h2>
        shuffle
    </h2>
</div>
</div>

<div className="audio">

    <audio id='music' src={musicc}></audio>
</div>
{/* <button onClick={handleClick}>

Play the song
</button> */}

</div>
 </>
  )
}

export default MusicNav