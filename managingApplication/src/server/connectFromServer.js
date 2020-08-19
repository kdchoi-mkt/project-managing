import {connectionString} from './connection'

const postTemplate = (info) => {
    return ({
        body: JSON.stringify(info),
        method: 'POST',
        headers: {
            "Content-Type": "application/json" 
        }}
    )
}

const connectFromServer = (feature, info) => {
    const url = `${connectionString}/${feature}`

    return fetch(
        url, postTemplate(info)
    )
    .then(resp => {
        return resp.text()
    })
    .then(value => {
        const resp_json = JSON.parse(value)
        return resp_json
    })
}

export default connectFromServer