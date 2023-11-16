import React,{Component} from 'react'
import Axios from 'axios'

class User extends Component{
constructor(props){
    super(props)
    this.state = {
        posts:[]
    }
}
componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((resp)=>{
this.setState({posts:resp.data})

    })
    .catch((err)=>{})
}
render(){
    return<div>
    <pre>{JSON.stringify(this.state.posts)}</pre>
{
    this.state.posts.length>0 ? <>
    <table>
    <thead>
    <tr>
    <th>id</th>
    <th>title</th>
    <th>Name</th>
    
    </tr>
    
    </thead>
    <thead>
    {

    
    this.state.posts.map((post)=>{
        return<tr>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.Name}</td>
        
        </tr>
    })
    }
    </thead>
    </table> </>: <h3>No Data</h3>

}
    </div>
}

}
export default User