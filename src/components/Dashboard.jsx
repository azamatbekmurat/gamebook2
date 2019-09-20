import React, { Component } from "react";
import axios from "axios";

const apiEndPoinst = "https://jsonplaceholder.typicode.com/posts";
class Dashboard extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndPoinst);

    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "adlfj" };
    const { data: post } = await axios.post(apiEndPoinst, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = () => {
    //console.log("Update button dashboard");
  };

  handleDelete = () => {
    //console.log("Delete button dashboard");
  };

  render() {
    //console.log("dash posts", this.state.posts);
    return (
      <div className="row" id="dashboard">
        <h4>Dashboard</h4>
        <br />
        <p>Lorem Ipsum</p>
      </div>
    );
  }
}

export default Dashboard;
