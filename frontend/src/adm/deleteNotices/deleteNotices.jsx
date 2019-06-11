import React, { Component } from 'react'
import Main from '../../components/template/Main'
import '../../usuario/noticiasU/divNoticias'
import * as firebase from 'firebase'
import { storage } from '../../index'



export default class noticiasU extends Component {
    constructor() {
        super();
        this.state = {
            notices: [],
            key: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(props, event) {
        firebase.database().ref('noticias').remove(props.key);
    }


    componentDidMount() {
        let ref = firebase.database().ref('/noticias');
        let thiz = this;
        ref.on('value', snapshot => {
            const state = snapshot.val();
            console.log(state)
            let tempState = {
                notices: []
            };
                
            Object.getOwnPropertyNames(state).forEach(function (val, key, array) {
                console.log('image', state[val].image);
                state[val].id = key;
                console.log(state[val].id)
                storage.ref('imagesNoticias/').child(state[val].image).getDownloadURL().then(function(url) {
                   state[val].url = url
                   console.log(url)
                    tempState.notices.push(state[val]);
                    thiz.setState(tempState);   
                    thiz.forceUpdate();
                 }).catch(function(error) {
                    
                 });
            });
        });
    }

    renderNotice(props, index) {

        return <div key={index} className="caixaaa">
            
            <div className="imagem">
                <img className="fotosss"
                src={props.url}
                alt="imagem"/>
                <div className="resto">
                    <p>Título: {props.title}</p>
                    <p> Data: {props.date} </p>
                </div>
                <button type="button" id="btn" className="btn btn-danger" onClick={e => this.handleSubmit()}> Excluir</button>
            </div>
        </div>
    }

    renderNotices() {
        return (
            <div className="conteeiner">
                {this.state.notices.map((notice, index) => this.renderNotice(notice, index))}
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