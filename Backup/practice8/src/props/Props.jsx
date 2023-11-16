import React,{Component} from 'react'

class Employee extends Component{
render(){
    let {eid,ename,location} = this.props
    return <>
    <h2>Employee component</h2>
    <h4>{JSON.stringify(this.props)}</h4>
    <h1>{eid}</h1>
    <h1>{ename}</h1>
   <h1>{location}</h1>
    </>
}

}
export default Employee