import { connect } from 'react-redux';
import { TodoList } from '../components/todo-list';

const mapStateToProps = state => ({
    todoIds: state.todoIds
});

export const TodoListContainer = connect(mapStateToProps)(TodoList);
