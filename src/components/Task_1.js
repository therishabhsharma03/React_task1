import React, { Component } from 'react';

class Task_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  keypress = (event) => {
    this.setState({ count: event.target.value.split(/\s+/).filter(word => word !== '').length });
  }

  render() {
    return (
      <div class = "d-flex flex-column align-items-center justify-content-center">
        <h6>Rishabh Sharma -- 21BCE11053</h6>
        <h1 className='text-center'>Responsive Paragraph Word Counter</h1>
        <textarea class="align-items-center justify-content-center" id="textInput" rows='5' cols='50' onChange={this.keypress}></textarea>
        <p id="wordcount">Word count: {this.state.count}</p>
      </div>
    );
  }
}

export default Task_1;
