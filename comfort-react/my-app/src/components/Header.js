import React from 'react'
import { Link } from 'react-router-dom'
import { getState } from '../helpers/state'
import Logout from './Logout'

function Header() {
    const [{ cart, user }] = getState();
    return (
        <>
            <div className="nav-mid">
                <div className="container">
                    <div className="row">
                        <div className="nav-front">
                            <div className="col-sm-4 col-xs-4">
                                <Link to="/"><img className="img-responsive" src="/images/logo.png" alt="Logo" /></Link>
                            </div>
                            <div className="col-sm-8 col-xs-8">
                                <ul className="nav-list-struct center-text">
                                    <li>
                                        <Link to="/Cart">
                                        <i className="fa fa-shopping-cart"></i>
                                        { cart.items.length ? <span className="count">{cart.items.length}</span> : ''}
                                        </Link>
                                    </li>
                                {
                                    user.loggedIn ? <>
                                                        <li><Link to="/Logout">Log Out</Link></li>
                                                        <li className="logged-in">{`Welcome ${user.username}!`}</li>
                                                    </>
                                :
                                                    <>
                                                        <li><Link to="/SignUp">Sign Up</Link></li>
                                                        <li><Link to="/Login">Log in</Link></li>
                                                    </>
                                }
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