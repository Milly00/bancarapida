import axios from 'axios'

export class API {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8000/api',
    })
  }
}
