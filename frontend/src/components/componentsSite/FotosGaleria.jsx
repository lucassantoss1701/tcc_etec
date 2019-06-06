import React, { Component } from 'react';
import * as firebase from 'firebase'
import Main from '../../components/template/Main'


export default class FotosGaleria extends Component {

    constructor() {
        super();
        this.state = {
            fotos: [],
            image: undefined
        }
    }

    componentDidMount() {
        const { image } = this.state;
        let ref = firebase.storage().ref(`images/${image.name}`);
        ref.on('file', snapshot => {
            const state = snapshot.val();
            let tempState = {
                fotos: []
            };
            Object.getOwnPropertyNames(state).forEach(function (val, idx, array) {
                tempState.fotos.push(state[val]);
            });
            console.log('temp', tempState);
            this.setState(tempState);
            console.log('state', this.state);
            this.forceUpdate();
        });
    }

    renderFoto(props, index) {
        return (
            <div key={index} id="caixa">
                <div className="">
                    <img className="fotos"
                        alt="First slide"
                        src={props.imagem.name}
                    />
                </div>
            </div>
        )
    }

    renderFotos() {
        return (
            <div className="conteiner">
                {this.state.fotos.map((foto, index) => this.renderFoto(foto, index))}
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
