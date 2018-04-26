import axios from 'axios'
import ipfsAPI from 'ipfs-api'

const IPFS_URL = 'http://localhost:5001/api/v0/'

const ipfs = ipfsAPI({
  host: 'localhost',
  port: '5001',
  protocol: 'http'
})

export const repo = {
  get (hash) {
    return axios.get(IPFS_URL + 'cat?arg=' + hash)
  },

  add (payload) {
    let buffer = Buffer.from(btoa(payload), 'utf8')
    return ipfs.add(buffer)
    // return axios.post(IPFS_URL + 'add?arg=', data)
  }
}
