/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {useReducer} from "react"
import {ShoppingListAction, ShoppingListState} from "../types"
import {usePersistedReducer} from "./usePersist"

function reducer(state: ShoppingListState, action: ShoppingListAction) {
  const {
    type,
    payload: {product}
  } = action

  switch (type) {
    case "add":
      return !state.find(({id}) => id === product.id) ? [...state, product] : state
    case "remove":
      return state.filter(({id}) => id !== product.id)
    default:
      return state
  }
}

export default function useShoppingList(initialState: ShoppingListState) {
  return usePersistedReducer({key: "shopping-list", reducer: useReducer(reducer, initialState)})
}
