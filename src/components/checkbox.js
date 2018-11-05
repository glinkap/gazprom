import React, { Component } from 'react';
export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  toggleChange = () => {
    this.setState({
      isChecked: this.props.ready,
    });
    this.props.toggleChange()
  }
  render() {
    return (
      <label>
        <input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />
        Check Me!
       </label>
    );
  }
}