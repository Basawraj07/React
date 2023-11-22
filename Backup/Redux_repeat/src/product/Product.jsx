import React from 'react'
import { incAction,decAction } from '../redux/product/product.action'
import { useDispatch,useSelector } from 'react-redux'

const Product=()=>{

  let dispatch = useDispatch()

  let product = useSelector((state)=>{
      return state

  })

  let incHandler=()=>{
    dispatch(incAction())
  }
  let decHandler=()=>{
  dispatch(decAction())
}

return (
<div>
<h1>Product Component</h1>
<pre>{JSON.stringify(product)}</pre>
<hr/>

<button onClick={incHandler}>+</button>
{product.qty}
<button onClick={decHandler}>-</button>

</div>

)


}
export default Product