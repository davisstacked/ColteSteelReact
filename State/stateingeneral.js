// What is state?

// State changes

// State is designed to change in response to events

// A great way to think about state is to think of games, for instance chess. At any point in time, the board is in a complex state. Every new move represents a single discrete state change.

// What does state track?

// There are two types of things state on the client/frontend keep track of:
// UI LOGIC - the changing state of the interface e.g., there is a modal open right now because I'm editing my profile.
// BUSINESS LOGIC - the changing state of data e.g., in my inbox, messages are either read or unread, and this in turn affects how they display.

// Vanilla/jQuery State
// the way we kept track of state with jQuery was by selecting DOM elements and seeing if they were displayed/hidden, or if they had certain styles or attributes. 