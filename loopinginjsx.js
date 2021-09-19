// Looping in JSX

// It is common to use array.map(fn) to output loops in JSX:

// class Messages extends React.Component {
//   render() {
//     const msg = [
//       { id: 1, text: "Greetings" },
//       { id: 2, text: "Goodbye!" },
//     ];

//     return (
//       <ul>
//         {Messages.map(m => <li>{m.text}</li>)}
//       </ul>
//     )
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Friend
          name="Elton"
          hobbies={["Piano", "Singing", "Dancing"]}
        />
        <Friend 
          name="Frida"
          hobbies={["Drawing, Painting"]}
        />
      </div>
    )
  }
}

class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {hobbies.map(h => <li>{h}</li>)}
        </ul>
      </div>
    )
  }
}