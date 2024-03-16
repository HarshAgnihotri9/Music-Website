import "./Comp3.css";
import { NavLink } from "react-router-dom";

function Comp3() {


  const handleclick=(e)=>{
    e.preventDefault();
  }
  return (
    <>
      <div className="mainnn">
        {/* <div className="left">
        <img  src="./img/left.png" alt="" />

        </div>
        <div className="rightt">
        

        <img  src="./img/right.png" alt="" />
        </div> */}


         
        <li onClick={handleclick} >
          <NavLink to="/" style={{textWrap:'nowrap'}} >All</NavLink>
        </li>
        <li>
          <NavLink to="/Trending" style={{textWrap:'nowrap'}}>Trending Songs</NavLink>
        </li>
        <li>
          <NavLink to="/OldSongs" style={{textWrap:'nowrap'}}>Old Songs</NavLink>
        </li>
        <li>
          <NavLink to="/NewSongs" style={{textWrap:'nowrap'}}>New Songs</NavLink>
        </li>
        <li>
          <NavLink to="/English" style={{textWrap:'nowrap'}}>English Songs</NavLink>
        </li>
        <li>
          <NavLink to="/top" style={{textWrap:'nowrap'}}>Top Artist</NavLink>
        </li>
        <li>
          <NavLink to="/topplaylist" style={{textWrap:'nowrap'}}>Top Playlist</NavLink>
        </li>
        <li>
          <a href="" className="Last" style={{textWrap:'nowrap'}}>Podcast</a>
        </li>

        <li>
          <NavLink to="/Udit" className="Last" style={{textWrap:'nowrap'}}>Fav</NavLink>
        </li>
        <li>
          <a href="" className="Last" style={{textWrap:'nowrap'}}>Lofi</a>
        </li>
        <li>
          <a href="" className="Last" style={{textWrap:'nowrap'}}>Bhajan</a>
        </li>
        <li>
          <a href="" className="Last" style={{textWrap:'nowrap'}}>kawaali</a>
        </li>
       
      </div>
    </>
  );
}

export default Comp3;
