import React,{ Component } from "react";
import Axios from 'axios'
import UserDetails from './Userdetails'
import UserList from './Userlist'

class User extends Component{
constructor(){
  super()
  this.state= {userData:{},selUser:{}} 
}

getselecteduser=(user)=>{
this.setState({selUser:user})
}

componentDidMount(){
Axios.get('https://dummyjson.com/users')
.then((resp)=>{
  this.setState({userData:resp.data})
})
.catch((err)=>{})
}
render(){
  return<>
  <h1>React Component</h1>
  <pre>{JSON.stringify(this.state.selUser)}</pre>
<div className="container">
<div className="row">
<div className="col-8">
{
Object.keys(this.state.userData).length >0? <>
<UserList getusers={this.getselecteduser} users={this.state.userData.users}/></>:null
  


}
</div>
<div className="col-4">
{
Object.keys(this.state.userData).length>0? <>< UserDetails user={this.state.selUser}/></>:<h3>no data</h3>

}
</div>
</div>
</div>

  </>
}


}
export default User