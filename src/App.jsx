import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from '../Components/Comp1/Comp1'
// import Comp2 from '../Components/Comp2/Comp2'
import Comp3 from '../Components/Comp3/Comp3'
import Comp4 from '../Components/Comp4/Comp4'
import Comp5 from '../Components/Comp5/Comp5'
import Comp6 from '../Components/Comp6/Comp6'
// import Login from '../Components/Login/Login'
// import Signup from '../Components/Signup/Signup'
// import axios from 'axios'
import UserContextProvider from '../Context/UserContextProvider'
import Comp7 from '../Components/Comp7/Comp7'
import Comp8 from '../Components/Comp8/Comp8'
import MusicNav from '../Components/MusicNav/MusicNav'
import Render from '../Components/RenderComp/Render'
import Render2 from '../Components/Render2.js/Render2'
import { Outlet } from 'react-router-dom'
// import Footer from '../Components/Footer/Footer'

function App() {
  
//   const[jokes,setjokes]=useState({})

//   useEffect(()=>{
//     axios.get('/api/jokes')
//     .then((response)=>{
//       setjokes(response.data)
//     })
//     .catch((error)=>{console.log(error);})

// })
    

// axios.post('/api/route',{
//   name:'harsh',
//   age:'33'
// })

// axios.post('/api/route',{
//   name:'harsh',
//   age:'34'
// }).then((response)=>{console.log(response.data);})
// .catch((error)=>{console.log(error);})



  return (
    <UserContextProvider>
      <div className="cont" id='cont'> 

   <Comp1/>
  {/* <Comp2/> */}
   <Comp3/> 
  <Comp5/>
  {/* <Comp6/>  */}
  {/* <Comp7/> */}
  {/* <Comp8/> */}
  <Outlet/>
   {/* <Render/> */}
   {/* <Render2/> */}
  <div className="muusic">
  <MusicNav/>
  </div>
  </div>
  {/* <Footer/> */}


  

    </UserContextProvider>
  )
}

export default App
