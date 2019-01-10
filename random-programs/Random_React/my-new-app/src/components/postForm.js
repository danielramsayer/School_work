import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    console.log("This registers");
    return (
      <div>
        <h2>Add Post</h2>
        <form>
          <div>
            <label>Title: </label><br />
            <input type="text" name="title" />
          </div>
          <br />
          <div>
            <label>Body: </label><br />
            <textarea name="body"/>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
