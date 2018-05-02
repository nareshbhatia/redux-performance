import { connect } from 'react-redux';
import { TodoView } from '../components/todo-view';

const mapStateToProps = (state, ownProps) => ({
    todo: state.todoMap[ownProps.todoId]
});

export const TodoViewContainer = connect(mapStateToProps)(TodoView);
