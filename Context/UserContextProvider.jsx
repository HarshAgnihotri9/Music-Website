import React, { useState } from "react";
import UserContext from "./Usercontext";

const UserContextProvider=({children})=>{

    const[user,setuser]=useState({})
    const[music,setmusic]=useState({})
    const [musictittle,setmusictittle]=useState({})
    const [flagg,setflagg]=useState(0)
    var[img,setimg]=useState("img/play.png")



return(
    <UserContext.Provider value={{user,setuser,music,setmusic,musictittle,setmusictittle,flagg,setflagg,img,setimg}}>
    {children}
    
    </UserContext.Provider>
)

}



export default UserContextProvider;