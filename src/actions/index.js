export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).
const count = 0
export const increment = (add) => {
  
  // Fill in this function
  return {

    type:'INCREMENT',
    //payload: count 
  };
  
};

export const decrement = (min) => {
  // Fill in this function
  return {
    
    type:'DECREMENT',
    //payload: count
    
  };
};
