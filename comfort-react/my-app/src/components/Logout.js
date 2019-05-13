import React from "react";
import { Redirect } from "react-router-dom";
import { StateContext } from "../helpers/state";

class Logout extends React.Component {
    static contextType = StateContext
    render() {
        const [ , dispatch] = this.context;
        dispatch({
            type: 'changeUser',
            newUser: {
                username: '',
                loggedIn: false
            }
        })
        return <Redirect push to="/" />
    }
}

export default Logout