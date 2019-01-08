import React, { Component } from 'react'

class postForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h2>Add Post</h2>
        {postItems}
      </div>
    )
  }
}

export default postForms;
