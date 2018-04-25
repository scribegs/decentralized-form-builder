import axios from 'axios'

export const repo = {
  get (hash) {
    return axios.get('http://localhost:5001/api/v0/cat?arg=' + hash)
  }
}
