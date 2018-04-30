Redux Performance
=================
This is a minimal example to experiment with Redux performance. The application displays a list of 10 to-do's and changes one of them every second. The goal of the exercise is to make sure only the changed todo gets re-rendered, not the entire list.

To achieve this, I have followed the recommendations in [Redux Performance FAQ](https://redux.js.org/faq/performance#how-well-does-redux-scale-in-terms-of-performance-and-architecture):

> For maximum rendering performance in a React application, state should be stored in a normalized shape, many individual components should be connected to the store instead of just a few, and connected list components should pass item IDs to their connected child list items (allowing the list items to look up their own data by ID).  This minimizes the overall amount of rendering to be done.

Accordingly, my Redux store consists of an array called `todoIds`, and a map of ids to the todo objects, called `todoMap`. When a todo changes, only the map is affected, not the array.

Here's how the view components have been optimized:

- The `todoIds` array drives the `TodoList` component. It should not be re-rendered because the array never changes - it is simply a list of ids. To ensure this, `TodoList` is a React `PureComponent`. Indeed, when you look at the Chrome DevTools console, you will see that the list renders only once, when the app starts.

- The todo `id` and the `todoMap` drive individual `TodoView`s. These have been optimized by adding `shouldComponentUpdate()` to the component. It prevents the component from redrawing when the content of the todo has not changed. Again you can verify this in the console. You should see a `TodoView` render only once a second.

Getting Started
---------------
```bash
$ yarn install
$ yarn start
```

Now point your browser to http://localhost:3000/. You will see 10 todos. One of the todos is updated randomly every second.

Reproducing the issue with React DevTools
-----------------------------------------
Open React DevTools while the application is running. Check "Highlight Updates". You will see that the entire list of todos is updated every second. This should not be the case. If you open the console, you will see that only one TodoView is rendered every second:

```
-----> TodoView.render(): 5
-----> TodoView.render(): 2
-----> TodoView.render(): 7
-----> ...
```

In addition, note that the entire TodoList is rendered only once - when the app starts:

```
-----> TodoList.render()
-----> TodoView.render(): 0
-----> TodoView.render(): 1
-----> TodoView.render(): 2
-----> TodoView.render(): 3
-----> ...
```

So why does React DevTools highlight the entire list every second?
