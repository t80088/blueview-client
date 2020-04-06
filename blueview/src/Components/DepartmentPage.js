import React from 'react';
import Post from './Post.js';
import './DepartmentPage.css';
import './NewPost.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }

    this.search = this.search.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  search(event) {
    alert("Search");
  }

  signIn(event) {
    alert("Sign In");
  }

  signOut(event) {
    alert("Sign Out");
  }

  render() {
    const loggedIn = this.state.loggedIn;
    let accountControl;
    if (loggedIn) {
      accountControl = <a className="signOutButton" onClick={this.signOut}>Sign Out</a>;
    } else {
      accountControl = <a className="signInButton" onClick={this.signIn}>Sign In</a>;
    }

    return (
      <div className="headerBody">
        <p className="logo">BlueView</p>
        <a className="search" onClick={this.search}>Search</a>
        {accountControl}
      </div>
    );
  }
}

class DepartmentHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="departmentHeaderMain">
        <div className="centerBox">
          <h1 className="departmentName">Washington County Sheriff's Office</h1>
          <h2 className="departmentAddress">399 Broadway, Fort Edward, NY</h2>
        </div>
      </div>
    );
  }
}

class PostControls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="postControlsContainer">
        <button className="createNewPostButton" onClick={this.props.showNewPost}>
          New Post
        </button>
      </div>
    );
  }
}

class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      date: '',
      text: ''
    }

    this.changeTitle = this.changeTitle.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.changeText = this.changeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  changeDate(event) {
    this.setState({
      date: event.target.value
    });
  }

  changeText(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Title: " + this.state.title +
          "\nDate: " + this.state.date +
          "\nText: " + this.state.text);
  }

  render() {
    return (
      <div className="newPostContainer">
        <form onSubmit={this.handleSubmit}>
          <div className="newPostInfo">
            <div className="newPostItem">
              <label className="newPostLabel">Title:</label>
              <input className="newPostTitle" type="text" onChange={this.changeTitle} />
            </div>
            <div className="newPostItem">
              <label className="newPostLabel">Date of event:</label>
              <input className="newPostDate" type="date" onChange={this.changeDate} />
            </div>
          </div>
          <label className="newPostLabel">Post text:</label>
          <textarea className="newPostText" value={this.state.text} onChange={this.changeText} />
          <div className="newPostControls">
            <button className="cancelPost" onClick={this.props.cancelPost}>Cancel</button>
            <input className="submitPost" type="submit" value="Post" />
          </div>
        </form>
      </div>
    );
  }
}

class PostFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creatingPost: false
    }

    this.showNewPost = this.showNewPost.bind(this);
    this.cancelPost = this.cancelPost.bind(this);
  }

  showNewPost() {
    this.setState({
      creatingPost: true
    });
  }

  cancelPost() {
    this.setState({
      creatingPost: false
    });
  }

  render() {
    return (
      <div className="postFeedContainer">
        <PostControls showNewPost={this.showNewPost} />
        {this.state.creatingPost && (<NewPost cancelPost={this.cancelPost} />)}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

class DepartmentContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="departmentContentMain">
        <div className="centerBox">
          <PostFeed />
        </div>
      </div>
    );
  }
}

class DepartmentPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="departmentPageMain">
        <Header />
        <DepartmentHeader />
        <DepartmentContent />
      </div>
    );
  }
}

export default DepartmentPage;
