// Setting State Using State

// We've established that setState() is asynchronous 
// So it is risky to assume previous call has finished when you call it. Also, React will sometimes batch (squash together) calls to setState together into one for performance reasons. 
// If a call to setState() depends on current state, the safest thing is to use the alternate "callback form"