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
                                    <Link to="/Home"><input type="submit" value="LOGIN" /></Link>
                                    <br />
                                    <a href="#">Forgot Password?</a>
                                </form>
                                <p>Not registered? <Link to="/SignUp">Create an Account</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login