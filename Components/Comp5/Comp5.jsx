import { useState, useEffect, useContext } from "react";
import Comp4 from "../Comp4/Comp4";
import UserContext from "../../Context/Usercontext";
import "./Comp5.css";

function Comp5() {
  const [width, setwidth] = useState(0);
  const [widthh, setwidthh] = useState(0);
  const { user } = useContext(UserContext);
  const [flag, setflag] = useState(0);
  const [main,setmain]= useState(0)
  
  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    let har = document.querySelector(".mainnnnn");
    har.scrollTo({ left: widthh, behavior: "smooth" });
    var imgw = Object.values(user) * 11;
    // console.log(imgw);
    // setwidthh(imgw);
    setmain(imgw);
   

  }, [widthh]);

  setTimeout(() => {
    
    // setwidthh(0)
    // let img=document.querySelector('.scroll')
    // console.log(img.innerWidth);
    if (widthh < main && flag == 0) {
      setwidthh(widthh + 100);
      // console.log(widthh);
    }
    if (widthh >= main && flag == 0) {
      setflag(1);
    }
    if (widthh >= main && flag == 1) {
      setwidthh(width - 100);
    }
    // if (widthh > imgw && flag == 1) {
    //   setwidthh(width - 100);
    // }
    if (widthh < main && flag == 1) {
      setwidthh(width - 100);
    }
    if (widthh <= 0 && flag == 1) {
      setflag(0);
    }
  }, 1000);

  // 

  return (
    <>
      <div className="mainnnnn">
        <Comp4
          className="scroll"
          img="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65dc8de15ac962179ce11a19/BANNER_295796395673988.png"
        />
        <Comp4 img="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65d88c55df3424699aa9fa10/BANNER_206771117875970.jpg" />
        <Comp4 img="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65d4860739a9ef66fe634e7c/BANNER_287644018450592.jpg" />
        <Comp4 img="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65a68fbc5596d027ec4e2720/BANNER_9021559470521.png" />
        <Comp4 img="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65d86f43bddf9c11f0abafb0/BANNER_719750740373141.jpg" />

        <Comp4 img="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65cf62209635b935683ffa71/BANNER_37064654015773.jpg" />

        <Comp4
          className="scroll"
          img="https://media.gettyimages.com/id/1331400363/photo/mumbai-india-atif-aslam-attends-the-sahara-one-new-show-launch-sur-kshetra-on-december-20.jpg?s=612x612&w=0&k=20&c=ugZFEQQw9z4JK-nwuozUuv7hhqpAtFAoQsyYCvMwvtA="
        />
        <Comp4 img="https://media.gettyimages.com/id/164508569/photo/mumbai-india-indian-bollywood-music-director-singer-and-composer-honey-singh-during-the-mtv.jpg?s=612x612&w=0&k=20&c=KgE8MB8aVeAFaN1gE1kBInpzlZJ-rRbG2VlR90GHu60=" />
        <Comp4 img="https://media.gettyimages.com/id/874105054/photo/mumbai-india-bollywood-singer-arijit-singh-performs-during-live-in-concert-at-mmrda-grounds.jpg?s=612x612&w=0&k=20&c=SQ9KQwopyZV73LnHM4y3M6BqvmwKrNaZdO_G64ODuAM=" />
        <Comp4 img="https://media.gettyimages.com/id/1093864726/photo/los-angeles-california-singer-beck-performs-osntage-during-the-malibu-love-sesh-benefit.jpg?s=612x612&w=0&k=20&c=QJeLlkQwc_bAgec1gWdPuT0tWCcbTt6dQdGDoQIo0Hs=" />
        <Comp4 img="https://media.gettyimages.com/id/1128719691/photo/canadian-singer-songwriter-grimes-attends-the-world-premiere-of-captain-marvel-in-hollywood.jpg?s=612x612&w=0&k=20&c=EtszBGVSthAaXFO4ai0ZfYcQAw0PvXAImuyBI9dFVnk=" />

        <Comp4 img="https://media.gettyimages.com/id/1512961/photo/singer-michael-bolton-performs-with-the-first-ame-choir-at-the-california-welcome-party-for-the.jpg?s=612x612&w=0&k=20&c=YT5cAgiGdAJWdAoI2Yt4W9E7v6cQps_SrbUte_o0zQc=" />
      </div>
    </>
  );
}

export default Comp5;
