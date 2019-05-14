import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class forgotPw extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',

            user: {
                email: ''
            },

            redirect: false

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:5000/api/user/')
        .then(results => results.json())
        .then(data => {
            let user = data.find(user => {
                return (user.email === this.state.email) ? user : null
                
            })
            if (user) {
                alert('Email Sent!')
                this.setState({redirect:true})
            } else {
                alert('Invalid Email!')
            }
        })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/Products" />
        }
        return (
            <>
                <div className="signin-bg">
                    <div className="form-pos container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-bg">
                                    <form className="signin-form" onSubmit={this.handleSubmit}>
                                        <h1>Forgot Password?</h1>
                                        <br />
                                        <input type="text" placeholder="Enter Email Address" name="email" value={this.state.email} onChange={this.handleChange} required/>
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
    
}

export default forgotPw