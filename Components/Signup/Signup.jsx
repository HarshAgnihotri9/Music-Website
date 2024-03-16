import Comp1 from '../Comp1/Comp1'
import './Signup.css'

import {useState} from 'react'

function Signup() {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
  return (
    <>
    <Comp1/>
     <div className="grid">

<form action="https://httpbin.org/post" method="POST" className="form login"  style={{marginTop:'30vh'}}>

  <div className="form__field">
    <label for="login__username"><svg className="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use></svg><span className="hidden">Username</span></label>
    <input id="login__username" type="text" name="username" onChange={(e)=>{setname(e.target.value)}} className="form__input" placeholder="Username" required/>
  </div>

  <div className="form__field">
    <label for="login__username"><svg className="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use></svg><span className="hidden">Email</span></label>
    <input id="login__username" type="text" name="Email" onChange={(e)=>{setname(e.target.value)}} className="form__input" placeholder="Email" required/>
  </div>

 

  <div className="form__field">
    <label for="login__password"><svg className="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lock"></use></svg><span className="hidden">Password</span></label>
    <input id="login__password" type="password" onChange={(e)=>{setpassword(e.target.value)}}  name="password" className="form__input" placeholder="Password" required/>
  </div>

  <div className="form__field">
    <input type="submit" value="Login"/>
  </div>

</form>

<p className="text--center">Already a member? <a href="#">Login up now</a> <svg className="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/images/icons.svg#arrow-right"></use></svg></p>

</div>

    
    </>
  )
}

export default Signup