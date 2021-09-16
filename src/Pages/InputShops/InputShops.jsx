import React, { useEffect } from 'react';
import Dashboard from '../../Components/Dashboard/Dashboard';
import './InputShops.css';

export default function InputShops() {
    return (
        <div className="xxxx">
         <div className ="table-wrapper">
            {/* <Dashboard /> */}
            <div className="ti">
                <h2>kindly enter the following: </h2> </div>
            <hr></hr>

            <br /> <br />
            <form>
                <label>First Name</label>
                <br />
                <input
                    type="text"
                    name="fname"
                    // value="name"
                    className="name"
                // placeholder="First Name"
                />
                <br />  <br />

                <label>Last Name</label>
                <br />
                <input
                    type="text"
                    name="lastname"
                    // value="name"
                    className="name"
                // placeholder="Last Name"
                />
                <br />  <br />
                <label> Email </label>
                <br />
                <input
                    type="text"
                    name="lastname"
                    // value="name"
                    className="name"
                // placeholder="Last Name"
                />
                <br />  <br />
                <label> Username</label>
                <br />
                <input
                    type="text"
                    name="fname"
                    // value="name"
                    className="name"
                // placeholder="First Name"
                />
                <br />  <br />

                <label>Password</label>
                <br />
                <input
                    type="text"
                    name="lastname"
                    // value="name"
                    className="name"
                // placeholder="Last Name"
                />
                <br />  <br />
                <label> Phone Number</label>
                <br />
                <input
                    type="text"
                    name="lastname"
                    // value="name"
                    className="name"
                // placeholder="Last Name"
                />
                <br />  <br />
                <label> Store Address</label>
                <br />
                <input
                    type="text"
                    name="lastname"
                    // value="name"
                    className="name"
                // placeholder="Last Name"
                />
                <br />  <br />

            </form>
            <div className="ssbb">
            <div className="save">
                <button className="ssv" type="submit">Save</button>
            </div>

            <div className="back">
                <button className="bkk" type="submit"> Back </button>
            </div>
            </div>
</div>
        </div>
    )
}