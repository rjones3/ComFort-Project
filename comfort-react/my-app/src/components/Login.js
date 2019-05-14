import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { StateContext } from '../helpers/state'

class Login extends React.Component {
    static contextType = StateContext;
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',

            user: {
                id: '',
                username: '',
                password: ''
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
        const [ , dispatch] = this.context
        fetch('http://localhost:5000/api/user/')
        .then(results => results.json())
        .then(data => {
            let user = data.find(user => {
                return (user.username === this.state.username && user.password === this.state.password) ? user : null
                
            })
            if (user) {
                dispatch({
                    type: 'changeUser',
                    newUser: {
                        id: this.state.id,
                        username: this.state.username,
                        password: this.state.password,
                        loggedIn: true
                    }
                })
                this.setState({redirect:true})
            } else {
                alert('Invalid Username and Password')
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
                                    <form className="signin-form" action="#" onSubmit={this.handleSubmit}>
                                        <h1>LOGIN</h1>
                                        <br />
                                        <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}  required />
                                        <br />
                                        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                                        <br />
                                        <input type="submit" value="LOGIN" />
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