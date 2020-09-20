export const InitialState = {}

const GlobalStateReducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return { ...state, [action.payload.name]: action.payload.value }
    case 'clear':
      return { ...state, [action.payload.name]: undefined }
    default:
      return state
  }
}

export default GlobalStateReducer
