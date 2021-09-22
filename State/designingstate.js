// Designing State
//  Designing the state of a React application (or any modern web app) is a challenging skill! it takes practice and time!

// Minimize your state

// In react, you want to try and put as little data in state as possible
// Litmust test
// Does x change? If not, x should not be part of state. It should be a prop. 
// is x already captured by some other value y in state or props? Derive it from there instead.

// State Should Live on the Parent 
// As previously mentioned, we want to support the "downward data flow" philosophy of React.
// In general, it makes more sense for a parent component to manage state and have a bunch of "dumb" stateless child display components.
// This makes debugging easier, because the state is centralized. It's easier to predict where to find state
// is the current component stateless? find out what is rendering it. There's the state.
