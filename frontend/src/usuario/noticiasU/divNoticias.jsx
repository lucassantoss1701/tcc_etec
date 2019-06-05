import React, { Component } from 'react';
import * as firebase from 'firebase';
import Main from '../../components/template/Main'
// import { Container } from './styles';


const headerProps = {
    icon: 'newspaper-o',
    title: 'Noticías',
    subtitle: 'Noticías: Incluir, Listar, Alterar e Excluir!'
}


export default class DivNoticias extends Component {

    constructor(){
        super();

        this.state = {
            value: undefined
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        this.titleRef = this.setState({
            title: this.state.value
        })
        firebase.database().ref().child('title').push(this.state.value);
        event.preventDefault();
    }
    

    componentDidMount(){
        const rootRef = firebase.database().ref().child('noticias');
        const titleRef = rootRef.child('title');

        titleRef.on('value', snap =>{
            this.setState({
                title: snap.val()
            })
        })
    }


    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Título</label>
                            <input type="text" className="form-control"
                                name = "name"
                                value = {this.state.value}
                                onChange={this.handleChange}
                                placeholder="Digite o título...">
                            </input>
                        </div>
                    </div>
                </div>
                <button type="submit" id="send" value ="submit" className="btn btn-primary" onClick={this.handleSubmit()}>
                    Salvar
                </button>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                <h1>{this.state.title}</h1>
                {this.renderForm()}
            </Main>
        )
    }
}


