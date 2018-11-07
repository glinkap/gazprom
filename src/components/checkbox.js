import React, { Component } from 'react'
export default class Checkbox extends React.Component {
    constructor(props) {
        super( props );
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        this.setState({ isChecked: this.props.receivechecked });
    }
    
    handleChange (e) {
       this.setState({ isChecked: e.target.checked });
       this.props.taskready({ checked: e.target.checked });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ isChecked: nextProps.receivechecked });
    }
    render() {
        return (
            <span>
                 <input type="checkbox"
                     checked={this.state.isChecked}
                     onChange={this.handleChange}
                 />
            </span>
        )
     }
}