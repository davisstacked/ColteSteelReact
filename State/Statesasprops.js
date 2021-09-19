// States as Props

// A common pattern we will see over and over again is a stateful ("smart") parent component passing down its state values as props to stateless "dumb" child components.

class CounterParent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
  }
  render() {
    // passing down parent state as a prop to the child
    return (
      <div>
        <CounterChild count={this.state.count} />
      </div>
    )
  }
}

// The idea is generalized in React as "downward data flow". It means that components get simpler as you go down the component hierarchy, and parents tend to be more stateful than children.