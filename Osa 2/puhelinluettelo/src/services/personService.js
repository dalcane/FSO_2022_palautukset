import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deletePerson = async (id, name) =>{
    if (window.confirm(`Do you really want to delete ${name} ?`)){
        const request = await axios.delete(`${baseUrl}/${id}`)
    } else {
        window.alert(`Didn't delete ${name}`)
    }
}

export default { getAll, create, update, deletePerson}