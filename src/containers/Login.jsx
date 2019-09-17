import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Account from "../components/Account";
import { Player } from "video-react";
import { connect } from "react-redux";

import { setName } from "../store/actions/userActions";

class Login extends Component {
  state = {
    username: "",
    password: ""
    //authError: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.setName(this.state);
  };

  render() {
    const { authError } = this.props;
    console.log("login props", this.props);

    if (authError) {
      return (
        <Redirect to={"/account"}>
          <Account name={this.props} />
        </Redirect>
      );
    }
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              id="username"
              onChange={this.handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    authError: state.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: creds => {
      dispatch(setName(creds));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
