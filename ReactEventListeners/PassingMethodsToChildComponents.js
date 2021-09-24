// Passing Functions to child components

// A very common pattern in React
// the idea: children are often not stateful, but need to tell parents to change state.

// How data flows
// a parent component defines a function
// the function is passed as a prop to a child component
// the child component invokes the prop
// the parent function is called, usually setting new state
// the parent component is re-rendered along with its children

// Where to bind?
// The higher the better - don't bind in the child component if not needed.
// If you need a parameter, pass it down to the child as a prop, then bind in parent and child.
// avoiding inline arrow functions/binding if possible. 
//  no need to bind in the constructor and make an inline function
