import React from "react";

export default class Todo extends React.Component {    
    render() {
        return (
            <li key={this.props.todo} className="list-group-item">
                {this.props.todo} 
                <a href="#" onClick={this.props.handleClick}>
                    <i className="glyphicon glyphicon-remove" style={{color: "red"}}></i>
                </a>
            </li>          
        );
    }
}