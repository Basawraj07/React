
import React,{useState} from 'react'

const Message =()=>{

let [Messge,setMessge] = useState("Hello")


return<>
<h1>Message:{Messge}</h1>
<button onClick={()=>{setMessge("Good Mornng")}}>gm</button>
<button onClick={()=>{setMessge("Good Night")}}>gn</button>


</>



}
export default Message