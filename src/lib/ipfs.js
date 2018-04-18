import axios from 'axios'

export const repo = {
  getInfo () {
    return axios
      .get('http://localhost:5001/api/v0/cat?arg=' + 'QmPFN8bNHeafXXYVTmGei2KPipH7y7mrEzra2evvv1eA7i')
  }
}
