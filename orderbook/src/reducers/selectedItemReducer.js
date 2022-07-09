const selectedItemReducer = (state, action) => {
  switch (action.type) {
    case "SELECTED_MARKET":
      return { ...state, code: action.payload }
    default:
      return state
  }
}

export default selectedItemReducer
