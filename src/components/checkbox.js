import React, { Component } from 'react';
export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
       
    }
    componentWillMount() {
        console.log("mount - ch");
        this.setState({ isChecked: this.props.status });
    }
    
    handleChange = (e) => {
       this.setState({ isChecked: e.target.checked });
       this.props.taskready({ checked: e.target.checked });
    }
    componentWillReceiveProps(nextProps) {
        console.log("nextProps", nextProps);
        this.setState({ isChecked: nextProps.status });
    }
    componentWillUpdate() {
        console.log("update - ch");
    }
    render() {
        return (
            <span>
                 <input type="checkbox"
                     checked={this.state.isChecked}
                     onChange={this.handleChange}
                 />
            </span>
         );
     }
}