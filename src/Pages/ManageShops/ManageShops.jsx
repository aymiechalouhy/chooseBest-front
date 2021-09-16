import React, { useEffect } from 'react';
import Dashboard from '../../Components/Dashboard/Dashboard';
import './ManageShops.css';

export default function ManageShops() {
    // useEffect(() => {
    //     async function fetchData() {
    //         await API.get('contacts')
    //             .then(res => {
    //                 console.log(res)
    //             });
    //     }
    //     fetchData();
    // }, [])
   
    
    
    return (
       <>
       <div className="container">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-8"><h2>Manage <b>Shops</b></h2></div>
                    <hr></hr>
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th> Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nehme</td>
                        <td>Chalouhy</td>
                        <td>nehme@ch</td>
                        <td>nehme-ch</td>
                        <td>Chalouhy</td>
                        <td>78880455</td>
                        <td>Zgharta</td>
                        <td>
							<a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                            <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                            <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                        </td>
                    </tr>   
                    <tr>
                        <td>Nehme</td>
                        <td>Chalouhy</td>
                        <td>nehme@ch</td>
                        <td>nehme-ch</td>
                        <td>Chalouhy</td>
                        <td>78880455</td>
                        <td>Zgharta</td>
                        <td>
							<a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                            <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                            <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                        </td>
                    </tr>  
                </tbody>
            </table>
        </div>
    </div>    
       </>
    )
}