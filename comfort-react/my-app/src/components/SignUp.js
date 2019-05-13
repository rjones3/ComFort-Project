import React from 'react'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            fname: '',
            lname: '',
            dob: '',
            phone: '',
            email: ''
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

        let data = {
            username: this.state.username,
            password: this.state.password,
            fname: this.state.fname,
            lname: this.state.lname,
            dob: this.state.dob,
            phone: this.state.phone,
            email: this.state.email
        }
        
        fetch('http://localhost:5000/api/user/create', {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }
    
    render() {

        return (
            <>
                <div className="signup-bg">
                    <div className="form-pos container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-bg">
                                    <form className="signin-form" action="#" onSubmit={this.handleSubmit}>
                                        <h1>SIGN UP</h1>
                                        <br />
                                        <input type="text" placeholder="Username" name="username" value={this.state.username} 
                                        onChange={this.handleChange} />
                                        <br />
                                        <input type="password" placeholder="Password" name="password" value={this.state.password} 
                                        onChange={this.handleChange} />
                                        <br /> 
                                        <input type="text" placeholder="First name" name="fname" value={this.state.fname} 
                                        onChange={this.handleChange} />
                                        <br />
                                        <input type="text" placeholder="Last name" name="lname" value={this.state.lname} 
                                        onChange={this.handleChange} />
                                        <br />
                                        <input type="text" placeholder="dob" name="dob" value={this.state.dob} 
                                        onChange={this.handleChange} />
                                        <br />
                                        <input type="text" placeholder="Phone Number" name="phone" value={this.state.phone} 
                                        onChange={this.handleChange} />
                                        <br />
                                        <input type="text" placeholder="Email address" name="email" value={this.state.email} 
                                        onChange={this.handleChange} />
                                        <br />
                                        <input type="submit" value="Get Started" />
                                    </form>
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

export default SignUp