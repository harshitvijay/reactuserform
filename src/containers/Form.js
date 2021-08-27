import React, { Component } from 'react'
import Input from '../components/Input'
import LabelSelect from '../components/LabelSelect'
import LabelRadio from '../components/LabelRadio'
import DisplayUsers from './DisplayUsers'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: {},
      errors: {},
      users: [],
    }
  }
  handleValidation() {
    let fields = this.state.fields
    let errors = {}
    let formIsValid = true

    //Name
    if (!fields['name']) {
      formIsValid = false
      errors['name'] = 'Cannot be empty'
    }

    if (typeof fields['name'] !== 'undefined') {
      if (!fields['name'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false
        errors['name'] = 'Only letters'
      }
    }

    //Email
    if (!fields['email']) {
      formIsValid = false
      errors['email'] = 'Cannot be empty'
    }

    if (typeof fields['email'] !== 'undefined') {
      let lastAtPos = fields['email'].lastIndexOf('@')
      let lastDotPos = fields['email'].lastIndexOf('.')

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields['email'].indexOf('@@') == -1 &&
          lastDotPos > 2 &&
          fields['email'].length - lastDotPos > 2
        )
      ) {
        formIsValid = false
        errors['email'] = 'Email is not valid'
      }
    }

    // Telephone
    if (!fields['phone']) {
      formIsValid = false
      errors['phone'] = 'Cannot be empty'
    }
    if (typeof fields['phone'] !== 'undefined') {
      if (fields['phone'].length !== 10) {
        formIsValid = false
        errors['phone'] = 'Phone number must be of 10 digit'
      }

      if (!fields['phone'].match(/^[0-9]*$/)) {
        formIsValid = false
        errors['phone'] = 'Only Numbers'
      }
    }

    // Date
    if (!fields['date']) {
      formIsValid = false
      errors['date'] = 'Cannot be Empty!'
    } else {
      let currentDate = new Date().toLocaleDateString()
      let temp = fields['date'].replaceAll('-', '/').split('/')
      let checkedDate = temp.reverse().join('/')

      if (currentDate === checkedDate) {
        errors['date'] = "Date Cannot be Today's date"
        formIsValid = false
      }
    }

    if (!fields['education']) {
      formIsValid = false
      errors['education'] = 'Cannot be Empty'
    }
    if (!fields['gender']) {
      formIsValid = false
      errors['gender'] = 'Cannot be Empty'
    }
    this.setState({ errors: errors })
    return formIsValid
  }

  contactSubmit = (e) => {
    e.preventDefault()
    if (this.handleValidation()) {
      let { users, data } = this.state
      data = this.state.fields

      let value = document.getElementById('submit').value.split(' ')
      if (value[0] === 'Edit') {
        users.splice(value[1], 1, data)
      } else {
        users.push(data)
      }
      this.setState({
        fields: {
          name: '',
          email: '',
          phone: '',
          date: '',
          gender: '',
          education: '',
        },
        errors: {},
        users: users,
      })
      alert('Form submitted')
      document.getElementById('submit').innerHTML = 'Send'
      document.getElementById('submit').value = 'Submit'
      // this.form.reset()
    } else {
      alert('Form has errors.')
    }
  }

  handleChange = (e) => {
    let fields = this.state.fields
    fields[e.target.name] = e.target.value
    this.setState({ fields })
  }

  deleteRow = (index) => {
    let { users } = this.state
    users.splice(index, 1)
    this.setState({
      fields: {},
      errors: {},
      users: users,
    })
  }
  editRow = (index) => {
    let { users } = this.state
    let data = users[index]
    this.setState({
      fields: data,
      errors: {},
      users: users,
    })
    document.getElementById('submit').innerHTML = 'Edit'
    document.getElementById('submit').value = `Edit ${index}`
  }
  render() {
    return (
      <div className='outer'>
        <div className='form'>
          <form
            name='contactform'
            onSubmit={this.contactSubmit}
            ref={(form) => (this.form = form)}
          >
            <div className='fields'>
              <fieldset>
                <h2 id='main-heading'> User Details Form</h2>
                <Input
                  data={{
                    type: 'text',
                    placeholder: 'Name',
                    name: 'name',
                    value: this.state.fields['name'],
                    onChange: this.handleChange,
                    error: this.state.errors['name'],
                  }}
                />
                <Input
                  data={{
                    type: 'email',
                    placeholder: 'Email',
                    name: 'email',
                    value: this.state.fields['email'],
                    onChange: this.handleChange,
                    error: this.state.errors['email'],
                  }}
                />
                <Input
                  data={{
                    type: 'tel',
                    placeholder: 'Phone',
                    name: 'phone',
                    value: this.state.fields['phone'],
                    onChange: this.handleChange,
                    error: this.state.errors['phone'],
                  }}
                />
                <Input
                  data={{
                    type: 'date',
                    placeholder: 'dd/mm/yyyy',
                    name: 'date',
                    value: this.state.fields['date'],
                    onChange: this.handleChange,
                    error: this.state.errors['date'],
                  }}
                />
                <br />
                <LabelSelect
                  data={{
                    label: 'Education:',
                    name: 'education',
                    value: this.state.fields['education'],
                    onChange: this.handleChange,
                    optionMap: ['NA', 10, 12, 'Graduation', 'Post-Graduation'],
                    error: this.state.errors['education'],
                  }}
                />
                <br />
                <LabelRadio
                  data={{
                    label: 'Male',
                    type: 'radio',
                    value: 'Male',
                    onChange: this.handleChange,
                    name: 'gender',
                  }}
                />
                <LabelRadio
                  data={{
                    label: 'Female',
                    type: 'radio',
                    value: 'Female',
                    onChange: this.handleChange,
                    name: 'gender',
                  }}
                />
                <LabelRadio
                  data={{
                    label: 'Other',
                    type: 'radio',
                    value: 'Other',
                    onChange: this.handleChange,
                    name: 'gender',
                  }}
                />
                <span className='error'>{this.state.errors['gender']}</span>
                <br />
                <button className='field' id='submit' value='Submit'>
                  Send
                </button>
              </fieldset>
            </div>
          </form>
        </div>
        <DisplayUsers
          data={this.state.users}
          deleteRow={this.deleteRow}
          editRow={this.editRow}
        />
      </div>
    )
  }
}

export default Form
