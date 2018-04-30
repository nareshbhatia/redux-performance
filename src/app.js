import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TodoListContainer } from './containers/todo-list-container';
import { changeTodo } from './actions';
import { rootReducer } from './reducers';

const store = createStore(rootReducer);
changeTodos();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <TodoListContainer />
        </Provider>
    );
  }
}

export default App;

function changeTodos() {
    return setInterval(function() {
        const todoId = getRandomInt(0, 9);
        const todo = {
            id: todoId,
            text: `Todo ${todoId} - ${getRandomInt(1, 100)}`
        };
        store.dispatch(changeTodo(todo))
    }, 1000);
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
