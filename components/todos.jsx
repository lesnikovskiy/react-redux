import React from "react";
import {connect} from "react-redux";

import NewTodo from "./newTodo";
import Todo from "./todo";
import {addTodo, deleteTodo} from "../actions"

const Todos = ({todos, dispatch}) => (    
	<div>       
		<h1>Todos</h1>
		<NewTodo onChange={e => {
			if (e.keyCode === 13) {
				dispatch(addTodo(e.target.value));
				e.target.value = "";
			}
		}} />
        <ul className="list-group">
		{todos.map((todo, index) => <Todo todo={todo} handleClick={e => dispatch(deleteTodo(index))} />)}
        </ul>
	</div>
);

function mapStateToProps(todos) {
	return {todos};
}

export default connect(mapStateToProps)(Todos);