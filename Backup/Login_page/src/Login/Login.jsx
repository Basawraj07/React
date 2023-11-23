import React, { useState } from 'react'

const Login=()=>{

let [user,setUser] = useState({email:"",password:""})

let emailHandler=(event)=>{
    setUser({...user,email:event.target.value})
}

let passwordHandler=(event)=>{
    setUser({...user,password:event.target.value})
}

let submitHandler=(event)=>{
    event.preventDefault()
}

return(
    <div>
    <h1>Form Component</h1>
    <pre>{JSON.stringify(user)}</pre>
    <hr/>
    <form onSubmit={submitHandler}>
    <label>Email::::</label>
    <input type='text' onChange={emailHandler}/> <br/>

    <label>password::::</label>
    <input type='text' onChange={passwordHandler}/> <br/>

    <input type='submit' value="Login"/>
    </form>
    </div>
)

}
export default Login