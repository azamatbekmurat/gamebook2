import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Account from "../components/Account";
import { Player } from "video-react";
import { connect } from "react-redux";
//import axios from "axios";
import { fetchUsers } from "../store/actions/usersActions";
import { signInSuccess } from "./../store/actions/singInActions";
import { signIn } from "./../services/authService";

//import { setName } from "../store/actions/userActions";

const loginStyle = {
  margin: "0 0 50% 0"
};

class Login extends Component {
  state = {
    //users: [],
    username: "",
    password: "",
    authError: false
  };

  // async componentDidMount() {
  //   this.props.fetchUsers();
  //   //console.log("did mount props", this.props);

  //   // const { data: users } = await axios.get(
  //   //   "https://jsonplaceholder.typicode.com/users"
  //   // );

  //   // this.setState({ users });
  // }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // this.props.signIn(this.state);
    signIn(this.state);
    this.props.signInSuccess(this.state.username);

    // const users = this.props.users;
    // const username = this.props.username;
    //const password = this.state.password;

    // if (users[username] === username) {
    //   this.setState({ authError: true });
    // } else {
    //   alert("Wrong username");
    // }
  };

  render() {
    const { authError, username } = this.props;

    if (authError) {
      return (
        <Redirect to={"/account"}>
          <Account nameEmail={username} />
        </Redirect>
      );
    }
    return (
      <div style={loginStyle}>
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
    //users: state.users,
    username: state.username,
    authError: state.authError
  };
};

// const mapStateToProps = state => {
//   return {
//     username: state.username,
//     authError: state.authError
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    // fetchUsers: () => {
    //   dispatch(fetchUsers());
    // },
    // signIn: creds => {
    //   dispatch(signIn(creds));
    // },
    signInSuccess: username => {
      dispatch(signInSuccess(username));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
