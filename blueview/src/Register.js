import React from 'react';
// import logo from './logo.svg';
import './Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '', 
      password: '',
      confirmPw: ''
    }

    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateConfirmPw = this.updateConfirmPw.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFirstName(event) {
    this.setState({firstName: event.target.value});
  }

  updateLastName(event) {
    this.setState({lastName: event.target.value});
  }

  updateUsername(event) {
    this.setState({username: event.target.value});
  }

  updatePassword(event) {
    this.setState({password: event.target.value});
  }

  updateConfirmPw(event) {
    this.setState({confirmPw: event.target.value});
  }

  handleSubmit(event) {
    alert("First Name: " + this.state.firstName + 
          "\nLast Name: " + this.state.lastName +
          "\nUsername: " + this.state.username +
          "\nPassword: " + this.state.password +
          "\nConfirm: " + this.state.confirmPw);
    event.preventDefault();
  }

  render() {
    return (
      <div className="main">
        <div className="RegisterContainer">
          <h1 className="RegisterTitle">BlueView</h1>
          <h2 className="RegisterSubtitle">Register</h2>
          <form onSubmit={this.handleSubmit}>
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" className="RegisterField" value={this.state.firstName} onChange={this.updateFirstName} />
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" className="RegisterField" value={this.state.lastName} onChange={this.updateLastName} />
            <label for="username">Username:</label>
            <input type="text" id="username" className="RegisterField" value={this.state.username} onChange={this.updateUsername} />
            <label for="password">Password:</label>
            <input type="password" id="password" className="RegisterField" value={this.state.password} onChange={this.updatePassword} />
            <label for="confirmPw">Confirm Password:</label>
            <input type="password" id="confirmPw" className="RegisterField" value={this.state.confirmPw} onChange={this.updateConfirmPw} />
            <input type="submit" value="Submit" className="RegisterSubmit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
