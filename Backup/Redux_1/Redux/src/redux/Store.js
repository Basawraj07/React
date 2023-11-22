import {createStore} from 'redux'
import {messageReducer} from './message/message.reducer'
import {composeWithDevTools} from '@redux-devtools/extension'
let Store=createStore(messageReducer,composeWithDevTools())
export {Store}