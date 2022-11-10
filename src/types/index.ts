/* eslint-disable no-unused-vars */
export enum Categories {
  DAIRY = "dairy",
  FRUITS = "fruits",
  MILK = "milk",
  MEAT = "meat",
  FISH = "fish",
  CHEESE = "cheese"
}

export interface Operation {
  amount: number
  type: string
}
export interface IBalance {
  balance: number
  operations: Operation[]
}

export type State = Record<string, IBalance>

export interface Action {
  type: string
  payload: {
    selected: string
    amount: number
    type: string
  }
}
