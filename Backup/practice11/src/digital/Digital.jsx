import React,{Component} from 'react'

class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {
            ct:new Date().toLocaleTimeString()
        }
    }
    updateTime=()=>{
        setInterval(()=>{
this.setState({ct:new Date().toLocaleTimeString()})
        },1000)
    }
    render(){
        setInterval(()=>{

        },1000)
        return<>
        <h1>Digital Clock</h1>
        <h2>{this.state.ct}</h2>
        <button onClick={this.updateTime}>Click</button>
        
        </>
           
        
    }
}
export default Clock