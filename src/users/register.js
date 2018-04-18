import React, { Component } from 'react'

class UserRegistration extends Component {
  componentDidMount () {
    let { repo } = this.props
    this._fetchInfo(repo)
  }

  _fetchInfo (repo) {
    repo.getInfo().then(res => {
      console.log(res.data)
    })
  }

  render () {
    return (
      <div>
        New User Registration
      </div>
    )
  }
}

export default UserRegistration
