import React from 'react'
import { Link } from 'react-router-dom'

function thankYou() {

    return (
        <>
            <div className="signin-bg">
                <div className="form-pos container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-bg">
                                <form className="signin-form" action="#">
                                    <h1>Thank You For Your Purchase</h1>
                                </form>
                                <p><Link to="/Home">BACK ></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default thankYou 