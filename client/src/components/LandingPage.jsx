import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Jumbotron style={{ background: "url('https://mdbootstrap.com/img/Photos/Others/gradient1.jpg')", height: 630 }}>
        <h1 style={{ paddingLeft: 12 }}>The Better Github News Feed</h1>
        <p style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 5, fontSize: 25 }}>
          This is a better version of the Github feed, which allows you to track the latest information
          about repos you are watching, contributing to, or using.  Get the latest information about any updates,
          such as pull requests, commits, issues, new repos, and more! Sign in with your Github credentials to get started!
        </p> <br />
        <p style={{ paddingLeft: 10 }}>
          <Login />
          <Signup />
        </p>
      </Jumbotron>
    );
  }
}