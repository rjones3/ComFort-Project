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
                                <img className="img-responsive" src="https://placehold.it/100x100" alt="Logo" />
                            </div>
                            <div className="col-sm-8 col-xs-6">
                                <ul className="nav-list-struct center-text">
                                    <li><a><Link to="/SignUp">Sign Up</Link></a></li>
                                    <li><a><Link to="/Login">Log in</Link></a></li>
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