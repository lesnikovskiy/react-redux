import React from "react";

const newTodo = ({onChange}) => (
    <form onSubmit={e => e.preventDefault()}>
        <fieldset className="form-group">
            <input type="text" onKeyUp={onChange} className="form-control" id="newTodoItem" autofocus />        
        </fieldset>
    </form>
);

export default newTodo;