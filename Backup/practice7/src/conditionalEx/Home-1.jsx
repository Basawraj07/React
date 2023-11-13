import React,{Component} from 'react'
 
class Home1 extends Component{
    state={
        islogin:false,
        msg:"Hello"
    }
loginHandler=()=>{
    this.setState({
    islogin:true,msg:"Wellcome"
    })
}
logoutHandler=()=>{
    this.setState({
        islogin:false,msg:"Thankyou"
    })
}
render(){
    return <div>
    <pre>{JSON.stringify(this.state)}</pre>
    <h1>Home page</h1>
    {
        !this.state.islogin ? <><button onClick={this.loginHandler}>Loginn</button> </>:
                            <><button onClick={this.logoutHandler}>Logout</button>  </>



    }
    <h1>{this.state.msg}</h1>

    </div>
}
}
export default Home1