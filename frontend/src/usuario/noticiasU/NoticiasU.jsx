import React, { Component } from 'react'
import Main from '../../components/template/Main'
import './divNoticias.css'
import * as firebase from 'firebase'

const now = new Date();


export default class noticiasU extends Component {
    constructor() {
        super();
        this.state = {
            notices: [],
        };
        
    }
    componentDidMount() {
        let ref = firebase.database().ref('/noticias');
        ref.on('value', snapshot => {
            const state = snapshot.val();
            let tempState = {
                notices: []
            };
            Object.getOwnPropertyNames(state).forEach(function (val, idx, array) {
                tempState.notices.push(state[val]);
            });
            console.log('temp', tempState);
            this.setState(tempState);
            console.log('state', this.state);
            this.forceUpdate();
        });
    }

    renderNotice(props, index) {
        return <div key={index} className="caixaaa">
            <div className="imagem">
                <img className="fotosss"
                    src={props.picture}
                    alt="First slide"
                />
                <div className="resto">
                    <p>Título: {props.title}</p>
                    <p> Data: {now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear()} </p>
                </div>
                <button type="button" id="btn" className="btn btn-primary"> Ver mais!</button>
            </div>
        </div>
    }

    renderNotices() {        
        return (
            <div className="conteeiner">
                { this.state.notices.map((notice, index) => this.renderNotice(notice, index)) }                
            </div>
        )
    }

    render() {
        return (
            <Main>
                <h1>{this.notices}</h1>
                {this.renderNotices()}
            </Main>
        )
    }
}