import React, { Component } from 'react';
import Main from '../../components/template/Main'
import axios from 'axios'

const headerProps = {
    icon: 'newspaper-o',
    title: 'Noticías',
    subtitle: 'Noticías: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UnderCrud extends Component {
    state = { ...initialState }
    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Título</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o título...">
                            </input>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Data</label>
                            <input type="date" className="form-control"
                                name="date"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome do autor..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            <label>Texto</label>
                            <textarea type="text" className="form-control" rows="10"
                                name="text"
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o texto..." />
                        </div>
                    </div>

                    <button className="btn btn-warning">
                            <i className="fa fa-folder"></i>
                    </button>
                    <hr />

                    <div className="how">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary"
                                onClick={e => this.save(e)}>
                                Salvar
                            </button>
                            <button className="btn btn-secondary ml-2"
                                onClick={e => this.clear(e)}>
                                Cancelar
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