import React,{Component} from 'react'

class Product2 extends Component{
    constructor(props){
        super(props)
        this.state={p_Name:"",price:"",qty:"",info:""}
    }

    updateHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitHandler=(event)=>{
        event.preventDefault()
    }

    render(){
        return<>
        <pre>{JSON.stringify(this.state)}</pre>
        <hr/>
        <form onSubmit={this.submitHandler}>
         <label>Name::</label>
         <input type='text' onChange={this.updateHandler}  name='p_Name'/>
         
         <label>price::</label>
         <input type='text' onChange={this.updateHandler} name='price'/>
         
         <label>qty::</label>
         <input type='text' onChange={this.updateHandler} name='qty'/>

         <label>info::</label>
         <input type='text' onChange={this.updateHandler} name='info'/>

         <input type='submit'  value='upload'/>
        
        
        </form>
        </>
    }
}

export default Product2