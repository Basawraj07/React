import React, { useMemo , useState} from 'react'

const Product1=()=>{

    let [num,setNum] = useState(1)
    let FacTorial = useMemo(()=>{return FactValue(num)},[num])

return<>
<h1>number is : {num}</h1>
<h1>factorial {num} is : {FacTorial}</h1>
<button onClick={()=>{setNum(num+1)}}>+</button>
<button onClick={()=>{setNum(num-1)}}>Fact-</button>
</>
}

const FactValue=(n)=>{
let result = 1;
for(let i=n;i>=1;i--){
   result = result * i 
}
console.log("hello its the num"+result)
return result
}
export default  Product1