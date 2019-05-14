import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { StateContext } from '../helpers/state'
import { getState } from '../helpers/state'


class userProfile extends React.Component {
    static contextType = StateContext;
    constructor() {
        super()
        this.state = {
            userPage: {
                id: '',
                username: '',
                password: '',
                fname: '',
                lname: '',
                dob: '',
                phone: '',
                email: ''
            },

            redirect: false

        }
    }

    componentDidMount() {        
        fetch('http://localhost:5000/api/user/')
        .then(results => results.json())
        .then(data => {
            let userPage = data.find(userPage => {
                return userPage.username === this.props.match.params.username ? userPage : null
                
            })
            this.setState({userPage})
        })
    }

    render() {
        let userPage = this.state.userPage;
        const [{ user }] = this.context;
        console.log(user.username)
        return (
            <>
            {userPage ?
                <div className="product-single-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="product-single-fr" key={userPage.id}>
                                    <img className="img-responsive" src="http://placehold.it/500x500"  />
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="product-single-ds">
                                    <h1>{userPage.username}</h1>
                                    <p>{userPage.fname} {userPage.lname}</p>
                                    <p>Hi, Welcome to my Profile! :)</p>
                                </div>
                                <div className="product-single-buy">
                                {
                                    user.loggedIn && user.username === userPage.username 
                                    ?
                                    <>
                                        <Link to='/changePassword'>Change Password</Link>
                                    </> 
                                    : 
                                    ""
                                }
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            :
            <div className="product-single-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="product-single-ds">
                                    <h1>No User Found...</h1>
                                </div>
                                <div className="product-single-buy">
                                    <Link to="/Home">Return Home</Link>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            }
            </>
        )
    }
    
}

export default userProfile