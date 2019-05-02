import React from 'react'

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
                                    <li><a>Sign Up</a></li>
                                    <li><a>Log in</a></li>
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