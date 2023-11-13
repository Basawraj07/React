import React,{Component} from 'react'

class Employee extends Component{
Employees= [{Emp_name:"basu",Emp_age:23,Emp_sal:25000},
            {Emp_name:"felison",Emp_age:22,Emp_sal:25000},
            {Emp_name:"jay",Emp_age:21,Emp_sal:5000}
]

render(){
return <div>
<table border={3}>
<thead>
<tr>
<th>Name</th>
<th>Age</th>
<th>Salary</th>

</tr>
</thead>

<tbody>
{

    this.Employees.map(function(emp,index){

 return<tr key={index}> 
<td>{emp.Emp_name}</td>
<td>{emp.Emp_age}</td>
<td>{emp.Emp_sal}</td>
</tr>

    })
        
    
}
</tbody>
</table>

</div>

}

}
export default Employee