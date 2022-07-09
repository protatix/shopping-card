const marketReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START_MARKET":
      return { ...state }
    case "RESET_STATE":
      return {
        ...state,
        loading: true,
        data: [],
      }
    case "FETCH_PARTIAL_MARKET":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "ACTION_DELETE":
      return {
        ...state,
        data: state.data.filter(({ id }) => !action.payload.includes(id)),
      }
    case "ACTION_INSERT":
      return {
        ...state,
        data: [...state.data, ...action.payload],
      }
    case "ACTION_UPDATE":
      return {
        ...state,
        data: state.data.map((item) => ({
          ...item,
          size:
            action.payload.find(({ id }) => item.id === id)?.size || item.size,
        })),
      }
    default:
      return state
  }
}

export default marketReducer
