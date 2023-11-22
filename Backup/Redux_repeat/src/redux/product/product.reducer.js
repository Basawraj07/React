
import { INCR,DECR } from './product.action'

let initialstate ={
    
e_name:"basu",
e_id:101,
qty:1
    
}

let productReducer =(state=initialstate,action)=>{
switch(action.type){
    case INCR:
return {...state,qty:state.qty+1}

    case DECR:
return{...state,qty:state.qty-1}

    default:
        return state
}
}

export {productReducer}