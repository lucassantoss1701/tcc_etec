import React, { Component } from 'react'
import Main from '../../components/template/Main'
import './FotosGaleria.css'
import * as firebase from 'firebase'
import { storage } from '../../index'


export default class noticiasU extends Component {
    constructor() {
        super();
        this.state = {
            notices: [],
        };
    }
    componentDidMount() {
        let ref = firebase.database().ref('/fotos');
        let thiz = this;
        ref.on('value', snapshot => {
            const state = snapshot.val();
            let tempState = {
                notices: []
            };
            Object.getOwnPropertyNames(state).forEach(function (val, idx, array) {
                console.log('image', state[val].image);
                storage.ref('images/').child(state[val].image).getDownloadURL().then(function(url) {
                   state[val].url = url
                   console.log(url)
                    tempState.notices.push(state[val]);
                    thiz.setState(tempState);   
                    thiz.forceUpdate();
                 }).catch(function(error) {
                    // Handle any errors
                 });
            });
        });
    }

    renderNotice(props, index) {
        return (
            <div key={index} className="caixaaa">
            <div className="imagem">
                <img className="fotosss"
                src={props.url}
                alt="imagem"/>
            </div>
        </div>
        )
    }

    renderFotos() {
        return (
            <div className="conteiner">
               {this.state.notices.map((notice, index) => this.renderNotice(notice, index))}
            </div>
        )
    }

    render() {
        return (
            <Main>
                <h1>{this.fotos}</h1>
                {this.renderFotos()}
            </Main >
        );
    }
}
