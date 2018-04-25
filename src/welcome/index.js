import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
  render () {
    return (
      <div className='App'>
        <div>
          <ul>
            <li>
              <Link to='/registration'>New User Registration</Link>
            </li>
            <li>
              <Link to='/registration?t=Qmbh6jXEE2drJcouYZ6Pa8j9bcSUz9n88BTf2EDPezohCM'>
                Simple Form
              </Link>
            </li>
            <li>
              <Link to='/registration?t=QmW5bGJXvDKCA1PAEjJjyhRHk3BRPkMhF5XPamvT6Voci8'>
                MMA Fighter Registation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Welcome
