// changing state
// this.setState() is the built-in React method of changing a component's state

// this.setState({ playerName: "Matt", score: 0})
// can call setState in any instance method except the constructor
// Takes an object describing the state changes
// Patches state object - keys that you didn't specify don't change. 
// Asynchronous! 
  // the component state will EVENTUALLY update
  // React controls when the state will actually change, for performance reasons.
// Components rerender when their state changes.