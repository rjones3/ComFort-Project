import React from 'react'
import { Link } from 'react-router-dom'
import { StateContext } from '../helpers/state'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',

            users: {
                username: '',
                password: ''
            }

        }
        this.handleChange = this.handleChange.bind(this);
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
            let users = data.find(user => {
                return user.username === this.state.username ? user.username : null
            })
            this.setState({users});
        })
        

    }
    render() {
        return (
            <>
                <div className="signin-bg">
                    <div className="form-pos container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-bg">
                                    <form className="signin-form" action="#" onSubmit={this.handleSubmit}>
                                        <h1>LOGIN</h1>
                                        <br />
                                        <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}  />
                                        <br />
                                        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                        <br />
                                        <Link to="/Home"><input type="submit" value="LOGIN" /></Link>
                                        <br />
                                        <Link to="/forgotPw">Forgot Password?</Link>
                                    </form>
                                    <p>Not registered? <Link to="/SignUp">Create an Account</Link></p>
                                    <p><Link to="/Home">BACK <i className="fas fa-chevron-right"></i></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
   
}

export default Login