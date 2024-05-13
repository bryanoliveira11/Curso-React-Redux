export function numberReducer(state, action) {
  switch (action.type) {
    case 'numberAdd':
      return { ...state, number: state.number + action.n };
    case 'numberMultiply':
      return { ...state, number: state.number * action.n };
    case 'numberDivision':
      return { ...state, number: state.number / action.n };
    case 'int':
      return { ...state, number: parseInt(state.number) };
    default:
      return state;
  }
}
