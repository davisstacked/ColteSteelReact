// Looping in JSX

// It is common to use array.map(fn) to output loops in JSX:

class Messages extends React.Component {
  render() {
    const msg = [
      { id: 1, text: "Greetings" },
      { id: 2, text: "Goodbye!" },
    ];

    return (
      <ul>
        {Messages.map(m => <li>{m.text}</li>)}
      </ul>
    )
  }
}