import React from 'react';
import { PropTypes } from 'prop-types';

export class TodoView extends React.Component {
    static propTypes = {
        todoId: PropTypes.number.isRequired,
        todoMap: PropTypes.object.isRequired
    };

    shouldComponentUpdate(nextProps) {
        const { todoId, todoMap } = this.props;
        const { todoMap: nextTodoMap } = nextProps;
        return todoMap[todoId] !== nextTodoMap[todoId];
    }

    render() {
        const { todoId, todoMap } = this.props;
        console.log('-----> TodoView.render():', todoId);

        return (
            <tr>
                <td >{todoMap[todoId]}</td>
            </tr>
        );
    }
}
