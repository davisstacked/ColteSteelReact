// Picking a key

// Best way: use string that uniquely identifies item among siblings.
// Most often you would use IDs from your data as keys:

// Last Resort
// when you don't have stable IDs for rendered items, you may use the iteration index as a key as a last resort

// only do this if items have no stable IDs
const todoItems = this.state.todos.map((todo, index) => <li key={index}>{todo.text}</li>)

// Don't use indexes for keys if item order may change or items can be deleted.
// this can cause performance problems or bugs with component state.