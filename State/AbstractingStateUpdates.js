// Abstracting State Updates

// The fact that you can pass a function to this.setState lends itself nicely to a more advanced pattern called functional setState.

// Basically you can describe your state updates abstractly as separate functions. But why would you do this?

// elsewhere in code
function incrementCounter(prevState) {
  return { count: prevState.count + 1 };
}

// Somewhere in the component
// this.setState(incrementCounter);

// Because testing your state changes is as simple as testing a plain function:

// expect(incrementCounter({ count: 0 })).toEqual({ count: 1 });

// This pattern also comes up all the time in Redux! 