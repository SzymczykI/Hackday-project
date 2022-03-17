import { properties } from './config'

const fetchData = async (path) => {
   const result = await fetch(`${properties.host}/api/${path}`);
   const json = await result.json();
   return json
}

export default fetchData;