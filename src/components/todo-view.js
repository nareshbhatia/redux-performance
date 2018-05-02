import React from 'react';
import { PropTypes } from 'prop-types';

export class TodoView extends React.Component {
    static propTypes = {
        todo: PropTypes.object.isRequired
    };

    render() {
        const { todo } = this.props;
        console.log('-----> TodoView.render():', todo.id);

        return (
            <tr>
                <td >{todo.text}</td>
            </tr>
        );
    }
}
