import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className="signin-bg">
                <div className="form-pos container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-bg">
                                <form className="signin-form" action="#">
                                    <h1>LOGIN</h1>
                                    <br />
                                    <input type="text" placeholder="Username" />
                                    <br />
                                    <input type="text" placeholder="Password" />
                                    <br />
                                    <input type="submit" value="LOGIN" />
                                    <br />
                                    <a href="#">Forgot Password?</a>
                                </form>
                                <p>Not registered? <a href="#link"><Link to="/SignUp">Create an Account</Link></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login