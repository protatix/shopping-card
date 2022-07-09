import React, { createContext, useContext, useReducer } from "react"
import { TYPES } from "../constanst"
import {
  marketReducer,
  selectedItemReducer,
  combineReducers,
} from "../reducers"

const rootReducer = combineReducers({
  market: marketReducer,
  selectedItem: selectedItemReducer,
})

const initialState = {
  market: {
    loading: true,
    data: [],
  },
  selectedItem: {
    code: TYPES.XBTUSD,
  },
}

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export const useGlobalState = () => useContext(StoreContext)
