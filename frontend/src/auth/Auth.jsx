import React, { Component } from 'react';
import logocps from '../assets/images/logo_cps.png'
import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css'

class Auth extends Component {

    auth = undefined;
    config = undefined;

    constructor() {
        super();
        this.authenticate = this.authenticate.bind(this);
        this.logout = this.logout.bind(this);

        this.config = {
            apiKey: "AIzaSyD-a_t_1igEo7wurZHchQMwCf9bZgoh-bY",
            authDomain: "tcc-etec.firebaseapp.com",
            databaseURL: "https://tcc-etec.firebaseio.com",
            projectId: "tcc-etec",
            storageBucket: "tcc-etec.appspot.com",
            messagingSenderId: "969832618114",
            appId: "1:969832618114:web:a060f6ce13d403e2"
        };

        this.state = {
            user: undefined
        }
    }

    componentDidMount() {
        this.auth = firebase.auth();

        this.auth.onAuthStateChanged((signedUser) => {
            if (signedUser) {
                this.setState({
                    user: signedUser,
                })
                console.log('Incluindo')
                localStorage.setItem('firebase_auth', this.state.user);
            } else {
                this.setState({
                    user: undefined
                });
                localStorage.removeItem('firebase_auth');
            }
        });

    }


    logout() {
        this.auth.signOut();
    }

    authenticate(e) {
        e.preventDefault();
        console.log('Call Firebase to authenticate');
        console.log(this.refs.email.value, '-', this.refs.password.value);

        this.auth.signInWithEmailAndPassword(this.refs.email.value, this.refs.password.value).then(signedUser => {
            this.setState({
                user: signedUser
            })
            window.location.href='home'
        })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, '-', errorMessage);
                alert('Email ou senha incorretos!');
            });;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    </div>
                    <div className="col-4">
                        <div className="container-fluid card-login">
                            <div className="card card-shadow">
                                <img className="card-img-top img-login align-self-center" src={logocps} alt="ETEC" />
                                <div className="card-body">
                                    <form onSubmit={this.authenticate}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail">Email</label>
                                            <input type="email" ref="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Senha</label>
                                            <input type="password" ref="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" />
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-primary btn-block"> Login</button>
                                            <small id="cardHelp" className="form-text text-muted text-center"> Autenticação Administradores.</small>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>

            </div>
        )
    }
}

export default Auth;