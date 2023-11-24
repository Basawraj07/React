import React, { useState } from 'react'

const Product=()=>{

let [product,setProduct] = useState({e_name:"",price:"",id:"",info:""})

let productHandler=(event)=>{
    console.log(event.target.value)
    setProduct({
        
        ...Product,[this.event.name]:this.event.target.value
    })
}
let submitHandler=(event)=>{
   

        event.preventDefault()
        console.log(product)

}

return<>
<pre>{JSON.stringify(product)}</pre>
<form onSubmit={submitHandler}>
<label>Name</label>
<input type='text' onChange={productHandler} name='e_name'/> <br/>

<label>price</label>
<input type='text' onChange={productHandler} name='price'/> <br/>

<label>id</label>
<input type='text' onChange={productHandler} name='id'/> <br/>

<label>info</label>
<input type='text' onChange={productHandler} name='info'/> <br/>

<input type='submit' value='upload'/>
</form>


</>


}

export default Product