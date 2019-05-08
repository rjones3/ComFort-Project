import React from 'react'
import { Link } from 'react-router-dom'

function forgotPw() {
    return (
        <>
            <div className="signin-bg">
                <div className="form-pos container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-bg">
                                <form className="signin-form" action="#">
                                    <h1>Forgot Password?</h1>
                                    <br />
                                    <input type="text" placeholder="Enter Email Address" />
                                    <br />
                                    <input type="submit" value="SEND" />
                                    <br />
                                </form>
                                <p><Link to="/Login">BACK <i className="fas fa-chevron-right"></i></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default forgotPw