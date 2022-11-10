import {FaCreditCard, FaMoneyBill, FaMoneyBillWave, FaMoneyCheck} from "react-icons/fa"

export default {
  operations: [
    {
      type: "increment",
      subType: "earning",
      label: "Ingresos",
      color: "text-green-800",
      bg: "bg-green-300",
      Icon: FaMoneyBill
    },
    {
      type: "increment",
      subType: "saving",
      label: "Ahorros",
      color: "text-sky-800",
      bg: "bg-sky-300",
      Icon: FaMoneyCheck
    },
    {
      type: "decrement",
      subType: "expense",
      label: "Gastos",
      color: "text-red-800",
      bg: "bg-red-300",
      Icon: FaMoneyBillWave
    },
    {
      type: "decrement",
      subType: "card",
      label: "Tarjetas",
      color: "text-amber-800",
      bg: "bg-amber-300",
      Icon: FaCreditCard
    }
  ]
}
