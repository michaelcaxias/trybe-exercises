// arquivo Users.js
import React, { Component } from 'react'

class Users extends Component {
  render() {
    const { match: { params: { id } }, greetingsMessage } = this.props
    return (
      <div>
        <h2>User</h2>
        <p> { greetingsMessage }, My awesome User { id } component </p>
      </div>
    );
  }
};

export default Users;