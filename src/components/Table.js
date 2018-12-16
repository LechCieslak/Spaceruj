import React from 'react';
import {Table, TableBody, TableHead } from "mdbreact";

class TableComponent extends React.Component {
   constructor(props) {
   super(props);

   }

   render(){
     return (
         <div>
             <h2 className="mt-5">{this.props.title}</h2>
             <Table>
                 <TableHead>
                     <tr>
                         <th>name</th>
                         <th>age</th>
                         <th>city</th>
                         <th>district</th>
                     </tr>
                 </TableHead>
                 <TableBody>
                     {
                         this.props.children.map((child) => (
                             <tr>
                                 <td>{child.name}</td>
                                 <td>{child.age}</td>
                                 <td>{child.city}</td>
                                 <td>{child.district}</td>
                                 {/*<td><button onClick={this.removeLi}>remove walk</button></td>*/}
                             </tr>
                         ))
                     }
                 </TableBody>
             </Table>
         </div>
     )
   }
    removeLi = (e) => {
    //    this.setState({
    //        children: this.state.children.filter((value) => {
    //            return value !== e.currentTarget.innerText;
    //    })
    //
    // });
        console.log("wdcwxcw");
    }



 }

// const TableComponent = (props) => (
//     <div>
//         <h2 className="mt-5">{props.title}</h2>
//             <Table>
//             <TableHead>
//             <tr>
//                 <th>name</th>
//                 <th>age</th>
//                 <th>city</th>
//                 <th>district</th>
//             </tr>
//             </TableHead>
//             <TableBody>
//                 {
//                     props.children.map((child) => (
//                         <tr>
//                             <td>{child.name}</td>
//                             <td>{child.age}</td>
//                             <td>{child.city}</td>
//                             <td>{child.district}</td>
//                             <td><button>remove walk</button></td>
//                         </tr>
//                     ))
//                 }
//             </TableBody>
//         </Table>
//     </div>
// );



export default TableComponent;