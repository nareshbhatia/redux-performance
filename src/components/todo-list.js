import React from 'react';
import { PropTypes } from 'prop-types';
import { TodoViewContainer } from '../containers/todo-view-container';

export class TodoList extends React.PureComponent {
    static propTypes = {
        todoIds: PropTypes.array.isRequired
    };

    render() {
        console.log('-----> TodoList.render()');
        const { todoIds } = this.props;

        return (
            <table>
                <tbody>
                {todoIds.map(id => (
                    <TodoViewContainer key={id} todoId={id} />
                ))}
                </tbody>
            </table>
        );
    }
}
