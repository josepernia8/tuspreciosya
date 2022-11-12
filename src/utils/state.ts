import {BalanceState} from "../types"
import getMonthYearString from "./date"

export const getEmptyFinancialState = (date: Date = new Date()) => {
  const initialState: BalanceState = {}
  initialState[getMonthYearString(date)] = {balance: 0.0, operations: []}

  return initialState
}

export const getEmptyMonthState = (date: Date = new Date()) => {
  return getEmptyFinancialState(date)[getMonthYearString(date)]
}
