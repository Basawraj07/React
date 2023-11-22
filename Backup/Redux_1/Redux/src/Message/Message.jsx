import React from 'react'
import { gmAction,gnAction } from '../redux/message/message.action'
import { useDispatch,useSelector } from 'react-redux'

const Message =()=>{

  let dispatch = useDispatch()

  let message = useSelector((state)=>{
    return state
  })

  let gmHandler =()=>{
    dispatch(gmAction())
  }

  let gnHandler =()=>{
    dispatch(gnAction())
  }

return(
  <>
  <pre>{JSON.stringify(message)}</pre>
  <h2>Value:{message.msg}</h2>
  <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
  </>
)
}
export default Message