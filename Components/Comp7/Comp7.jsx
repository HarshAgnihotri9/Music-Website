import React from 'react'
import Comp6 from '../Comp6/Comp6'
import './Comp7.css'
import Comp8 from '../Comp8/Comp8'
import { NavLink } from 'react-router-dom'

function Comp7() {
  return (

    <>
    <div className="heading">New Arrival</div>
    <div className="mainnnnnnn">
      <NavLink to="/Trending">
        <Comp6 title="New Songs Mix" img="https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65e1bf95722fcb29b7531513/COLLECTION_2763477280934737.png"/>

      </NavLink>
      <NavLink to="/NewSongs">
        <Comp6  title="New Hindi Songs" img="https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://img-dynamic.wynk.in/unsafe/top/filters:watermark(https://discovery-prod-arsenal.s3.ap-south-1.amazonaws.com/arsenal/library/new_songs_mix_1/var4/v4/new_songs_mix_1.png,0,-0,0,100,100)/https://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/A10301A0005245078C_20240226120232794/1708946405801/resources/A10301A0005245078C.jpg?dynamic=true"/>

      </NavLink>
      <NavLink to="/English">
        <Comp6 title="New English Songs" img="https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65e1aedd312a345d26141fca/COLLECTION_2444600358061360.png"/>

      </NavLink>
        <Comp6 title="crakk" img="https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8902894362238_20240301004131/8902894362238/1709235013348/resources/8902894362238.jpg"/>
        <Comp6 title="1989 (Tailors Swift)" img="https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602458396768_20231104020718653/1699068014896/23UM1IM11868_T1_cvrart.jpg"/>
        <Comp6 title="Walker World" img="https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/730553306976_20231110140926/730553306976/1699606506335/resources/730553306976.jpg"/>

        <Comp6 title=" Tere Baaton Mein Aisa Uljha Jiya" img="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8902894362214_20240205185326/8902894362214/1707140412515/resources/8902894362214.jpg"/>
        

    </div>
    <Comp8/>
    </>
  )
}

export default Comp7