import { properties } from './config'

const fetchData = async (path) => {
    fetch(`${properties.host}/api/${path}`).then(res => res.json())
}

export default fetchData;