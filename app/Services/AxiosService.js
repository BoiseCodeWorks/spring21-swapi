
// Exports the "helper" axios who fires all the requests to the provided API
// @ts-ignore
export const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 10000
})

