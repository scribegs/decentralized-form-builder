import React, { Component } from 'react'
import Form from 'react-jsonschema-form'

const defaultSchema = {
  title: 'New User Registration',
  type: 'object',
  required: ['firstName', 'lastName', 'phoneNumber', 'emailAddress'],
  properties: {
    firstName: {
      type: 'string',
      title: 'First Name'
    },
    lastName: {
      type: 'string',
      title: 'Last Name'
    },
    phoneNumber: {
      type: 'string',
      title: 'Phone Number'
    },
    emailAddress: {
      type: 'string',
      title: 'Email Address'
    },
    dateOfBirth: {
      type: 'string',
      format: 'date',
      title: 'Date of Birth'
    }
  }
}

class UserRegistration extends Component {
  constructor (props) {
    super(props)

    this.state = {
      schema: undefined
    }
  }

  componentDidMount () {
    let reqSchema = new URLSearchParams(this.props.location.search).get('t')
    let schema = reqSchema || defaultSchema

    this._fetchSchema(schema)
  }

  _fetchSchema (schema) {
    let { repo } = this.props

    if (typeof schema === 'object') {
      return this.setState({ schema })
    }

    repo.get(schema).then(res => {
      this.setState({schema: res.data})
    })
  }

  render () {
    let { schema } = this.state

    return <div>{schema && <Form schema={schema} />}</div>
  }
}

export default UserRegistration
