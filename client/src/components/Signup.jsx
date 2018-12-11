import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Signup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Button
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=user%20repo%20notifications`}
          bsStyle="primary"
        >
          Sign Up With Github
        </Button>
    );
  }
}