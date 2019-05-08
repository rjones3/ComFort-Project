import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <>
            <div className="signin-bg">
                <div className="form-pos container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-bg">
                                <form className="signin-form" action="#">
                                    <h1>SIGN UP</h1>
                                    <br />
                                    <input type="text" placeholder="First name" />
                                    <br />
                                    <input type="text" placeholder="Last name" />
                                    <br />
                                    <input type="text" placeholder="Email address" />
                                    <br />
                                    <input type="text" placeholder="Username" />
                                    <br />
                                    <input type="text" placeholder="Password" />
                                    <br /> 
                                    <input type="submit" value="Get Started" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp