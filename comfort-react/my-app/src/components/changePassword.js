import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { StateContext } from '../helpers/state'

class changePassword extends React.Component {
    static contextType = StateContext;
    constructor() {
        super()
        this.state = {
            newPassword: '',
            userPage: {
                id: '',
                username: '',
                fname: '',
                lname: '',
                dob: '',
                phone: '',
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

    componentDidMount() {
        const [{ user }] = this.context;
        fetch('http://localhost:5000/api/user/')
        .then(results => results.json())
        .then(data => {
            let userPage = data.find(userPage => {
                return userPage.username === user.username ? userPage : null
                
            })
            this.setState({userPage})
            console.log(userPage)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const [{ user }] = this.context;
        const name = user.username;
        
        let data = {
            id: this.state.userPage.id,
            username: this.state.userPage.username,
            password: this.state.newPassword,
            fname: this.state.userPage.fname,
            lname: this.state.userPage.lname,
            dob: this.state.userPage.dob,
            phone: this.state.userPage.phone,
            email: this.state.userPage.email
        }
        console.log(data)
        fetch('http://localhost:5000/api/user/edit/' + name, {
            method: 'PUT',
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
                <div className="signin-bg">
                    <div className="form-pos container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-bg">
                                    <form className="signin-form" onSubmit={this.handleSubmit}>
                                        <h1>Change Password</h1>
                                        <br />
                                        <input type="text" placeholder="Enter New Password" name="newPassword" value={this.state.newPassword} onChange={this.handleChange} required/>
                                        <br />
                                        <input type="submit" value="SEND" />
                                        <br />
                                    </form>
                                    <p><Link to="/">BACK <i className="fas fa-chevron-right"></i></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default changePassword