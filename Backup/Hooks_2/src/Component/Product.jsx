import React,{useState} from 'react'

const Product=()=>{

let [qty,setQty]=useState(0)

return<>
<h1>Product Quantity:{qty}</h1>

<button onClick={()=>{setQty(qty+1)}}>Increment</button>
<button onClick={()=>{setQty(qty-1)}}>Decrement</button>

</>

}

export default Product

