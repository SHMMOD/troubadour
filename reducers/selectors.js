export const toArray = (state, sliceName) => {
  const slicedState = state[sliceName];
  return Object.keys(slicedState).map(key => slicedState[key]);
};
