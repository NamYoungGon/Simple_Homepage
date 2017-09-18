import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            screen: 'Login'
        };
    }

    render() {
        return (
            <div className="login" >
                <Container>
                    { this.state.screen === "Login" ? <LoginScreen/> : <SignUpScreen/> }
                </Container>
            </div>
        )
    }
}

class LoginScreen extends React.Component {
    render() {
        return (
            <Grid className="login__grid">
                <Grid.Column>
                    <div className="ui attached message">
                        <div className="content">
                            <div className="header">Welcome to our site!</div>
                            <p>Enter your email and password to sign in</p>
                        </div>
                    </div>
                    <form className="ui form attached segment fluid">
                        <div className="field">
                            <label>Email</label>
                            <input placeholder="yGon@gmail.com" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="fields">
                            <div className="field">
                                <button type="button" className="ui button primary">
                                    Login
                                </button>
                            </div>
                            <div className="field">
                                <button type="button" className="ui button green">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </Grid.Column>
            </Grid>
        )
    }
}

class SignUpScreen extends React.Component {
    render() {
        return (
            <div>
            
            </div>
        )
    }
}

export default Login;