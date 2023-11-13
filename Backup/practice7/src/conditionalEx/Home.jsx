import React,{Component} from 'react'

class Home extends Component{
state={
    userlogin:!false,
    msg:""
}
updatevalue=()=>{
    this.setState({
userlogin:!this.state.userlogin,
msg:"wellcome"
    })
    
}
render(){
return <div>
<pre>{JSON.stringify(this.state)}</pre>
<h2>ternary operator</h2>
{
!this.state.userlogin ? <><button onClick={this.updatevalue}>Login</button> </>:
                      <><button onClick={this.updatevalue}>Logout</button> </>

}
<h1>{this.state.msg}</h1>
</div>

}


}
export default Home