import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="nav-mid">
                <div className="container">
                    <div className="row">
                        <div className="nav-front">
                            <div className="col-sm-4 col-xs-6">
                                <Link to="/"><img className="img-responsive" src="/images/logo.png" alt="Logo" /></Link>
                            </div>
                            <div className="col-sm-8 col-xs-6">
                                <ul className="nav-list-struct center-text">
                                    <li><Link to="/SignUp">Sign Up</Link></li>
                                    <li><Link to="/Login">Log in</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header