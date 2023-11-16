import React from 'react'
import CompB from './compB'
const CompA = () => {
    let ename="Rahul Gandhi"
    let id=1001;
    return <div>
        <pre>{ename}</pre>
        <h1>Component A</h1>
        <hr />
        <CompB  name={ename} id={id} msg={"GM"}/>
    </div>
}

export default CompA