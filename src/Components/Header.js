import React from 'react';
import baseUrl from '../Utils/config'
import axios from 'axios';
import './Header.css';
import { Redirect } from 'react-router-dom'

// Topmost header of the page
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: (localStorage.getItem('jwt-token')||'' != ''),
      zip: '',
      redirectHome: false,  // Variables for redirects
      redirectSignin:false,
      toDepartmentPage:false,
      toAllDepartments:false,
      department:null
    }
    
    this.goAllDepts = this.goAllDepts.bind(this);
    this.handleZipTyping = this.handleZipTyping.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.goHome = this.goHome.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  // Redirect to All Departments page
  goAllDepts(event) {
    this.setState({toAllDepartments:true});
  }

  // Change state based on user typing
  handleZipTyping(event) {
    this.setState({
      zip: event.target.value
    });
  }

  // Get department information for entered zipcode and redirect
  handleSearch(event) {
    event.preventDefault();
    axios.get(`${baseUrl}/department/zipcode/${this.state.zip}`)
    .then(res => {
      const data = res.data
      console.log(data.department[0]);
      this.setState({department: data.department[0]});
      this.setState({toDepartmentPage: true});
    });
  }

  // Redirect to homepage
  goHome(event) {
    this.setState({redirectHome:true});
  }

  // Redirect to signin if user is not signed in
  signIn(event) {
    this.setState({redirectSignin:true});
  }

  // Sign out user
  signOut(event) {
    localStorage.removeItem('jwt-token');
    localStorage.removeItem('userid');
    this.setState({redirectSignin:true});
  }

  // Consists of the logo, a search bar, 
  // an "All Departments" button, and a sign in/out button
  render() {
    const loggedIn = this.state.loggedIn;
    let accountControl;

    if (loggedIn) {
      accountControl = <a className="signOutButton" onClick={this.signOut}>Sign Out</a>;
    } else {
      accountControl = <a className="signInButton" onClick={this.signIn}>Sign In</a>;
    }
    
    const {redirectHome, redirectSignin, toDepartmentPage, toAllDepartments} = this.state;

    if (redirectHome) {
      console.log("this should happen");
      return <Redirect to={'/Home'}/>
    }

    if (redirectSignin) {
        return <Redirect to={'/SignIn'}/>
    }

    if (toDepartmentPage) {
      return <Redirect to={'/DepartmentPage/' + this.state.department.id}/>
    }

    if (toAllDepartments) {
      return <Redirect to={'/AllDepartments/'}/>
    }

    return (
      <div className="headerBody">
        <p className="logo" onClick={this.goHome}>BlueView</p>
        <form onSubmit={this.handleSearch} className="zipHeaderForm">
          <input className="zipHeaderField" placeholder="Enter a ZIP code" type="text" 
              value={this.state.zip} name="zipHeaderField" onChange={this.handleZipTyping} />
          <input className="zipHeaderButton" type="submit" value="GO" />
        </form>
        <a className="deptListButton" onClick={this.goAllDepts}>All Departments</a>
        {accountControl}
      </div>
    );
  }
}

export default Header;