import {Dispatch} from "react"

/* eslint-disable no-unused-vars */
export enum Categories {
  DAIRY = "dairy",
  FRUITS = "fruits",
  MILK = "milk",
  MEAT = "meat",
  FISH = "fish",
  CHEESE = "cheese"
}

//  Financial
export interface Operation {
  amount: number
  type: string
}
export interface Balance {
  balance: number
  operations: Operation[]
}

export type BalanceState = Record<string, Balance>

export interface BalanceAction {
  type: string
  payload: {
    selected: string
    amount: number
    type: string
  }
}

export interface BalanceReducer {
  state: BalanceState
  dispatch: Dispatch<BalanceAction>
}

// Shopping List

export interface Product {
  id: number
  cat?: Categories
  image: string
  label: string
  prices: {type: string; value: number}[]
}

export type ShoppingListState = Partial<Product>[]

export interface ShoppingListAction {
  type: string
  payload: {
    product: Partial<Product>
  }
}

export interface ShoppingListReducer {
  state: ShoppingListState
  dispatch: Dispatch<ShoppingListAction>
}
