/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {useReducer} from "react"
import {BalanceAction, BalanceState} from "../types"
import {usePersistedReducer} from "./usePersist"

function reducer(state: BalanceState, action: BalanceAction) {
  const {
    payload: {selected, amount, type}
  } = action
  const stateClone = {...state}
  if (!stateClone[selected]) stateClone[selected] = {balance: 0, operations: []}
  const item = stateClone[selected]

  switch (action.type) {
    case "increment":
      stateClone[selected] = {balance: item!.balance + amount, operations: [...item!.operations, {amount, type}]}
      break
    case "decrement":
      stateClone[selected] = {balance: item!.balance - amount, operations: [...item!.operations, {amount, type}]}
      break
    default:
      break
  }

  return stateClone
}

export default function useBalance(initialState: BalanceState) {
  return usePersistedReducer({key: "financial", reducer: useReducer(reducer, initialState)})
}
