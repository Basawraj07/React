import { gn,gm } from "./message.action";

let initialState={
    msg:"Hello"
}

let messageReducer =(state=initialState,action)=>{
switch(action.type){
    case "gm":
        return {msg:"good morning"}
    case "gn":
        return {msg:"good night"}

        default:state
}

}
export {messageReducer}