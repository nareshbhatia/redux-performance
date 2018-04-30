import { connect } from 'react-redux';
import { TodoView } from '../components/todo-view';

const mapStateToProps = state => ({
    todoMap: state.todoMap
});

export const TodoViewContainer = connect(mapStateToProps)(TodoView);
