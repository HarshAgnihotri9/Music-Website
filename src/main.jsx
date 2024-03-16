import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route } from 'react-router-dom'
import './index.css'
import { Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Render from '../Components/RenderComp/Render.jsx'
import Layout from '../Components/Layout/Layout.jsx'
import Comp7 from '../Components/Comp7/Comp7.jsx'
import OldSongs from '../MusicComp/OldSongs/OldSongs.jsx'
import Udit from '../MusicComp/UditNarayan/UditNarayan.jsx'
import NewSongs from '../MusicComp/NewSongs/NewSongs.jsx'
import EnglishSongs from '../MusicComp/EnglishSongs/EnglishSongs.jsx'
import Comp8 from '../Components/Comp8/Comp8.jsx'

const router =createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>

    <Route path='/' element={<Comp7/>}/>

    <Route path='/Trending' element={<Render/>}/>

    <Route path="/OldSongs" element={<OldSongs/>} />
    <Route path="/NewSongs" element={<NewSongs/>} />
    <Route path="/English" element={<EnglishSongs/>} />
    <Route path="/top" element={<Comp8/>} />
    <Route path="/topplaylist" element={<Comp7/>} />






    <Route path='/Udit' element={<Udit/>} />
   


  </Route>
))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
