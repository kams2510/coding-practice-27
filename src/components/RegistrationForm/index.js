import {Component} from 'react'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      firstNameError: false,
      lastNameError: false,
      submitted: false,
    }
  }

  validateForm = () => {
    const {firstName, lastName} = this.state
    const firstNameError = firstName.trim() === ''
    const lastNameError = lastName.trim() === ''
    this.setState({firstNameError, lastNameError})
    return !firstNameError && !lastNameError
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.validateForm()) {
      // Handle successful submission (e.g., API call, etc.)
      this.setState({submitted: true})
    }
  }

  handleBlur = () => {
    this.validateForm()
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  renderForm = () => {
    const {firstName, lastName, firstNameError, lastNameError} = this.state

    return (
      <form className="input-container" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          {firstNameError && <p>Required</p>}
        </div>
        <div>
          <label htmlFor="lastName">LAST NAME</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          {lastNameError && <p>Required</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }

  renderSuccessMessage = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button onClick={() => this.setState({submitted: false})} type="button">
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {submitted} = this.state

    return (
      <div>
        <h1>Registration</h1>
        {submitted ? this.renderSuccessMessage() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
