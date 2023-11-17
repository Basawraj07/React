import React,{Component} from 'react'

class Time extends Component{
    constructor(props){
        super(props)
        this.state = {
            ct:new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({ct:new Date().toLocaleTimeString()})
        },1000)
    }

    render(){
        return<>
        <h1>CURRENT TIME</h1>
        <h2>{this.state.ct}</h2>
      
        </>
    }
}

export default Time