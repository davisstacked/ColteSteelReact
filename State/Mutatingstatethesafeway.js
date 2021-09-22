// Mutable data structures
// Until now we've been setting state to primatives: mainly numbers and strings.
// But component state also commonly includes objects, arrays, and arrays of objects

this.state = {
  todos: [
    { task: 'do the dishes', done: false, id: 1 },
    { task: 'vacuum the floor', done: true, id: 2 }
  ]
};

// dont do this way...
// completeTodo(id) {
//   const theTodo = this.state.todos.find(t => t.id === id);
//   theTodo.done = true; // noooo
// }

// this.setState({
//todos: this.state.todos // bad
// })

// Why? it's a long story...

// mutating nested data structures in your state can cause problems with React. A lot of the time it'll be fine, but that doesn't matter. Just don't do it!

// A much better way is to make a new copy of the data structure in question. We can use any pure function to do this...

// Do it this way.
completeTodo(id) {
  // array.prototype.map returns a new array
  const newTodos = this.state.todos.map(todo => {
    if (todo.id === id) {
      // make a copy of the todo object with done -> true
      return { ...todo, done: true };
    }
    return todo; // old todos can pass thru
  });

  this.setState({
    todos: newTodos // setState to the new array
  });
}

// immutable state updates.
// A lot of what you will be doing is writing pure functions such as .map, .filter, and .reduce are your friends.

// There is a slight efficiency cost due to the O(N) space/time required to make a copy, but it's almost always worth it to ensure that your app doesn't have extreme difficulty detecting bugs due to mischevious side effects.

// Immutable State Summary
// While it sounds like an oxymoron, immutable state just means that there is an old state object and a new state object that are both snapshots in time.
// The safest way to mutate state is to make a copy of it, and then call this.setState with the new copy.
// This pattern is a good habit to get into for React apps and required for using Redux.