import React, { Component } from 'react';
import { api } from '../services/api';

class Snippets extends Component {

    state = {
        snippets: []
    }

    componentDidMount() {
        api.snippets.getSnippets().then(json => {
            this.setState({snippets: json})
        })
    }

    render() {
        return <div>
            {this.state.snippets.map(snippet => {
                return <div key={snippet.id}>
                    <h1>{snippet.title}</h1>
                    <p>{snippet.language}</p>
                    <p>{snippet.code}</p>
                </div>
            })}
        </div>
    }
}

export default Snippets;