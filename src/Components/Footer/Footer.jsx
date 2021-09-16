import React, { useEffect } from 'react';

import './Footer.css';
import chooseBest from '../../image/chooseBest.png';

export default function Footer() {

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
        <div className="main_footer">

            <div className="headerf">
                <h2>Contact Form</h2>
            </div>
            <div className="displaying">

                <div className="inputData">
                    <div className="zero">
                        <img src={chooseBest} className="image1" alt="Team Member" width="70%" heitgh="80%" />
                    </div>
                    <div className="firsttwo">
                        <div className="colf1">
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Name:"
                            />
                        </div>
                        <br />
                        <div className="colf2">
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Last Name:"
                            />
                        </div>
                    </div>
                    <div className="secondtwo">
                        <div className="colf3">
                            <input
                                required
                                type="text"
                                name="email"
                                placeholder="Email: "
                            />
                        </div>
                        <br />
                        <div className="colf4">
                            <input
                                required
                                type="text"
                                name="number"
                                placeholder="Phone Number: "
                            />
                        </div>
                    </div>
                    <br />

                    <div className="lastone">
                        <div className="colf5">
                            <input
                                required
                                type="text"
                                name="Message"
                                placeholder="Message: "
                            />
                        </div>
                    </div>
                    </div>

                    <div className="send">
                        <button className="sn" type="submit"> SEND </button>
                    </div>

               
            </div>
            <br />
            <div className="rowz">
                <p className="colf-sm">
                    &copy;{new Date().getFullYear()} Choose best's Website | All rights reserved |
                    Terms Of Service | Privacy
                </p>
            </div>

        </div>

    )
}