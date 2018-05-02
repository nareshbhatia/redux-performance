Redux Performance
=================
This is a minimal example to experiment with Redux performance. The application displays a list of 10 to-do's and changes one of them every second. The goal of the exercise is to make sure only the changed todo gets re-rendered, not the entire list.

To achieve this, I have followed the recommendations in [Redux Performance FAQ](https://redux.js.org/faq/performance#how-well-does-redux-scale-in-terms-of-performance-and-architecture):

> For maximum rendering performance in a React application, state should be stored in a normalized shape, many individual components should be connected to the store instead of just a few, and connected list components should pass item IDs to their connected child list items (allowing the list items to look up their own data by ID).  This minimizes the overall amount of rendering to be done.

Accordingly, my Redux store consists of an array called `todoIds`, and a map of ids to todo objects, called `todoMap`. When a todo changes, only the map is affected, not the array.

Here's how the view components have been optimized:

- The `todoIds` array drives the `TodoList` component. It should not be re-rendered because the array never changes - it is simply a list of ids. To ensure this, `TodoList` is a React `PureComponent`. Indeed, when you look at the Chrome DevTools console, you will see that the list renders only once, when the app starts.

- The todo `id` and the `todoMap` drive individual `TodoView`s. These views will not redraw unless the todo item changes. Again you can verify this in the console. You should see a `TodoView` render only once a second.

Getting Started
---------------
```bash
$ yarn install
$ yarn start
```

Now point your browser to http://localhost:3000/. You will see 10 todos. One of the todos is updated randomly every second.

Verifying optimized rendering with React DevTools
-------------------------------------------------
Open React DevTools while the application is running. Check "Highlight Updates". You will see that a random TodoView is re-rendered every second.

*P.S. For context on the last bit of optimization please refer to [issue #1023](https://github.com/facebook/react-devtools/issues/1023) on react-devtools project.*
