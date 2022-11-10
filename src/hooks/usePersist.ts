import {Dispatch, useEffect} from "react"
import {Action, State} from "../types"
import getMonthYearString from "../utils/date"

export function usePersistedState() {
  const persistedState = localStorage.getItem("state")

  if (persistedState) {
    return JSON.parse(persistedState)
  }

  const initialState: State = {}
  initialState[getMonthYearString(new Date())] = {balance: 0.0, operations: []}

  return initialState
}

export function usePersistedReducer([state, dispatch]: [State, Dispatch<Action>]) {
  useEffect(() => localStorage.setItem("state", JSON.stringify(state)), [state])

  return {state, dispatch}
}
