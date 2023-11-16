import React,{Component} from 'react'
import Employee from './Props'

class User extends Component{
 employee={
    ename:"basu",
    eid:108,
    location:['banglore','Goa']
}
render(){
return <div>
<h3>component</h3>
<hr/>
<Employee eid={this.employee.eid} ename={this.employee.ename} location={this.employee.location[1]}/>

</div>

}
}
export default User