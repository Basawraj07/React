import React, { useRef } from 'react'

const RegiForm=()=>{

let btnRef = useRef(null)
let termsandCondition =(event)=>{
btnRef.current.disabled = !event.target.checked
}


return<>
<h1>Registration Form</h1>
<form>
<label>Name</label>
<input type='text'/><br/>
<label>Number</label>
<input type='number'/><br/>
<label>password</label>
<input type='password'/><br/>

<input type='checkbox' onClick={termsandCondition}/>please accept terms and condition

<input type='submit' value="Registration" disabled ref={btnRef}/>




</form>


</>

}

export default RegiForm