let INCR="INCR"
let DECR="DECR"

let incAction=()=>{
    return {type:INCR}
}

let decAction=()=>{
    return{type:DECR}
}

export {INCR,DECR,incAction,decAction}