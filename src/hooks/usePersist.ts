import {Dispatch, useEffect} from "react"
import {BalanceAction, BalanceState, ShoppingListAction, ShoppingListState} from "../types"
import {getEmptyFinancialState} from "../utils/state"

export function usePersistedState({key}: {key: string}) {
  const persistedState = localStorage.getItem(key)

  if (persistedState) {
    return JSON.parse(persistedState)
  }

  if (key === "financial") return getEmptyFinancialState()
  if (key === "shopping-list") return []
}

export function usePersistedReducer({
  key,
  reducer: [state, dispatch]
}: {
  key: string
  reducer: [BalanceState, Dispatch<BalanceAction>] | [ShoppingListState, Dispatch<ShoppingListAction>]
}) {
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [key, state])

  return {state, dispatch}
}
