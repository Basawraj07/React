import React from 'react'
class CompB extends React.Component{
    render(){
        return <div>
            <pre>{JSON.stringify(this.props)}</pre>
          <h3>{this.props.name}</h3>
            <h3>{this.props.id}</h3>
            <h2>{this.props.msg}</h2>
        </div>
    }

}

export default CompB