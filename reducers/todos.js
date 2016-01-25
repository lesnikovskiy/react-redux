import Immutable from "immutable";

export default (state = Immutable.List(["Code More!"]), action = {}) => {
    console.log(JSON.stringify(action));
	switch (action.type) {
		case "addTodo":
			return state.push(action.todo);
        case "deleteTodo":            
            return state.delete(action.index);
		default:
			return state;
	}
};