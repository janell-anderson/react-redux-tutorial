# react-redux-tutorial

## Notes

- You are able to pass an initial state to createStore, but most of the time you do not have to.
- Passing an initial state is useful for server side rendering. 
- The state comes from the reducers.

# Reducers

- In Redux the state must return entierly from reducers.
- A reducer is a Javascript function. 
    - It takes two parameters: the current state and an action.
- State is immutable and cannot change in place.

- Reducers must be pure. A pure function is on that returns the exact same output for the given input. 
- In React the local state changes in place with setState. In Redux you cannot do that.

