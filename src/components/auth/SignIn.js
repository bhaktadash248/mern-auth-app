import React, { Component } from 'react'

export class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        console.log(this.state)
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="well well-lg col-md-4 col-sm-4 col-md-offset-4 col-sm-offset-4">
                <form onSubmit={this.handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-default">Login</button>
                </form>
            </div>
        )
    }
}

export default SignIn
