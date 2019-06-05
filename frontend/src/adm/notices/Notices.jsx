import React, { Component } from 'react';
import Main from '../../components/template/Main'
import * as firebase from 'firebase'

const headerProps = {
    icon: 'newspaper-o',
    title: 'Noticías',
    subtitle: 'Noticías: Incluir, Listar, Alterar e Excluir!'
}



export default class UnderCrud extends Component {

    constructor() {
        super();

        this.state = {
            value: undefined,
            text: undefined
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangee = this.handleChangee.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value});
        //separar isso
    }
    handleChangee(event) {
        this.setState({ text: event.target.text  });
        //separar isso
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        this.titleRef = this.setState({
            title: this.state.value,
            
        })
        this.textRef = this.setState({
            text: this.state.text
        })
        firebase.database().ref('noticias').child('id').push(this.state.value);
        firebase.database().ref('noticias').child('id').push(this.state.text);
    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child('noticias');
        const titleRef = rootRef.child('id');

        titleRef.on('value', snap => {
            this.setState({
                title: snap.val(),
                text: snap.val()
            })
        }
        )
    }


    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Título</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.value}
                                onChange={this.handleChange}
                                placeholder="Digite o título...">
                            </input>
                        </div>
                    </div>
                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            <label>Texto</label>
                            <textarea type="text" className="form-control" rows="10"
                                name="text"
                                value={this.state.text}
                                onChange={this.handleChangee}
                                placeholder="Digite o texto..." />
                        </div>
                    </div>

                    <button className="btn btn-warning">
                        <i className="fa fa-folder"></i>
                    </button>
                    <hr />

                    <div className="how">
                        <div className="col-12 d-flex justify-content-end">
                            <button type="submit" id="send" value="submit" className="btn btn-primary" onClick={e => this.handleSubmit()}>
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}