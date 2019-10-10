const API_ROOT = 'http://localhost:8000'

const HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const getSnippets = () => {
    return fetch(`${API_ROOT}/snippets/`, {
        method: 'GET',
        headers: HEADERS
    }).then(res => res.json())
}

const addSnippet = data => {
    return fetch(`${API_ROOT}/snippets`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(data)
    }).then(res => res.json())
}

const editSnippet = data => {
    return fetch(`${API_ROOT}/snippets/${data.id}`, {
        method: 'PATCH',
        headers: HEADERS,
        body: JSON.stringify(data)
    }).then(res => res.json())
}

const deleteSnippet = data => {
    return fetch(`${API_ROOT}/snippets/${data.id}`, {
        method: 'DELETE',
        headers: HEADERS,
        body: JSON.stringify(data)
    }).then(res => res.json())
}

export const api = {
    snippets: {
        getSnippets,
        addSnippet,
        editSnippet,
        deleteSnippet
    }
}