import React, { Component } from 'react'
import Main from '../../components/template/Main'
import './divNoticias.css'
import foca from '../../assets/images/foca.png'

const headerProps = {
    icon: 'newspaper-o',
    title: 'Noticías',
}

export default class Noticia extends Component {
    constructor() {
        super();
        this.state = {
            notices: [],
        };
    }
    componentDidMount() {

    }

    renderNotice(props, index) {
        return <div key={index} className="notica" align="center">
            <h1>Apresentação de TCC</h1>
            <p>Para muitos alunos, o momento da apresentação do TCC é um dos mais difíceis de todo o processo, seja por medo de falar em público, por insegurança para expor as ideias ou por medo da banca.
No entanto, a apresentação de TCC não é um bicho de 7 cabeças, tendo a atenção a alguns pontos é possível passar por essa fase sem grandes problemas.</p>
            <hr />
            <img src={foca}></img>
            <hr />
            <h3>A apresentação e a Banca</h3>
            <p>No final da elaboração do TCC, o aluno (ou o grupo) deverá apresentar oralmente o conteúdo e os resultados de sua pesquisa a uma banca composta normalmente por professores da faculdade, em geral 3.
    
    A Banca já terá ciência de sua monografia e a apresentação servirá como uma demonstração geral da sua pesquisa, principais resultados e para esclarecer algumas dúvidas. Ela também é utilizada para certificar-se que o aluno conhece o assunto, que foi ele quem realmente fez a pesquisa e elaborou o trabalho.
    
A apresentação de TCC deverá ser feita entre 15 e 20 minutos, adicionando-se mais 10 minutos para perguntas e esclarecimentos. No final da apresentação a banca fará anotações na monografia para que o aluno faça as devidas revisões e entregue o resultado final. Confira o processo utilizado em sua faculdade com o professor orientador.</p>
            <h3>Preparação da Apresentação</h3>
            <p>A melhor forma de fazer a apresentação da monografia com tranquilidade e ter segurança é estar preparado para ela.
     
     Ninguém mais que você conhece melhor o conteúdo de sua monografia, então antes da apresentação basta revisá-la e estudar algum assunto que seja relevante mas que ainda não está 100% claro. Isso ajudará no momento de mostrar os slides mas principalmente às questões da banca, tente antecipar quais podem ser as perguntas em cada parte da apresentação, assim você estará preparado.
     
     Como parte da preparação, treine a apresentação dos slides sozinho ou para um pequeno grupo de amigos. Além de melhorar a confiança, isso ajuda a rever alguns slides que possam não estar claros e quais dúvidas podem surgir. Também cronometre o tempo e veja se a apresentação cabe dentro dos 15 minutos esperados.
     
Outro ponto que gera muitas dúvidas é a roupa para apresentação do TCC. É bom pensar como se fosse uma entrevista de emprego ou uma reunião de trabalho. De preferência use roupas formais, mas nada muito exagerado. Não precisa ir de terno e gravata, mas também não use bermuda e camiseta. </p>
        </div>

    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderNotice()}
            </Main>
        )
    }
}

