import React,{Component} from 'react'

class UserList extends Component{

selectedUser=(user)=>{
this.props.getusers(user)
}
render(){
  let {users}= this.props
return<>
<h1>user details</h1>
<pre>{JSON.stringify(users)}</pre>
<table className='table'>
<thead>
<tr>
<th>Id</th>
<th>NAME</th>
<th>email</th>
<th>Gender</th>
</tr>
</thead>

<tbody >
{
users.map((user,index)=>{
  return<tr key={index} onMouseOver={this.selectedUser.bind(this,user)}>
  
  <td>{user.id}</td>
  <td>{user.firstName}</td>
  <td>{user.email}</td>
  <td>{user.gender}</td>

  </tr>
})


}

</tbody>
</table>


</>


}



}
export default UserList