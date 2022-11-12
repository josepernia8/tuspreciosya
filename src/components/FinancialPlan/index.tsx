import es from "date-fns/locale/es"
import {Button, Modal} from "flowbite-react"
import {KeyboardEvent, useState} from "react"
import * as ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {FaPlusSquare, FaTimesCircle} from "react-icons/fa"
import constants from "../../constants"
import useBalance from "../../hooks/useBalance"
import {usePersistedState} from "../../hooks/usePersist"
import {BalanceReducer} from "../../types"
import currency from "../../utils/currency"
import getMonthYearString from "../../utils/date"
import {getEmptyMonthState} from "../../utils/state"

// Change locale of Date Picker from en-US to spanish
ReactDatePicker.registerLocale("es", es)

const initialDate = new Date()

const FinancialPlan: React.FC = () => {
  // State methods
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [modalValue, setModalValue] = useState<string>("")
  const [type, setType] = useState<{main: string; sub: string}>({main: "", sub: ""})

  // Get State from Local Storage
  const initialState = usePersistedState({key: "financial"})

  // Application State (balance & operations)
  const {state, dispatch} = useBalance(initialState) as BalanceReducer

  // State methods related to current month
  const [currentDate, setCurrentDate] = useState<Date>(initialDate)
  const current = state[getMonthYearString(currentDate)] || getEmptyMonthState(currentDate)

  // Event handlers
  const operationAdd = (opType: string, opSubType: string) => {
    setType({main: opType, sub: opSubType})
    setModalOpen(true)
  }

  const modalClose = () => {
    setModalOpen(false)
    setModalValue("")
    setType({main: "", sub: ""})
  }

  const modalApply = () => {
    if (modalValue !== ".") {
      if (modalValue) {
        dispatch({
          type: type.main,
          payload: {selected: getMonthYearString(currentDate), amount: Number(modalValue), type: type.sub}
        })
      }
      modalClose()
    }
  }

  const handleModalInput = (value: string) => {
    const val = value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1")
      .replace(/^0[^.]/, "0")

    setModalValue(val)
  }

  const modalKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") modalApply()
  }

  // Calculate operations
  const initialSum: Record<string, number> = {earning: 0, saving: 0, expense: 0, card: 0}
  const operationsSum = current.operations.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.type]: acc[curr.type] + curr.amount
    }),
    initialSum
  )

  // Render
  return (
    <>
      <section id="month-selection" className="flex justify-center">
        <div className="w-fit text-center">
          <ReactDatePicker.default
            locale="es"
            selected={currentDate}
            onChange={(date: Date) => setCurrentDate(date)}
            showMonthYearPicker
            dateFormat="MMMM yyyy"
          />
        </div>
      </section>

      <div className="h-[1.5px] bg-gray-200 my-5"></div>

      <section id="balance" className="mt-4">
        <div className="flex items-baseline gap-1 bg-purple-300 rounded p-2">
          <h1 className="font-lobster tracking-wider text-2xl text-white">Balance:</h1>
          <span className="font-lobster tracking-wider text-lg text-white">
            {currency.format(current?.balance || 0)}
          </span>
        </div>
      </section>

      <section id="detail" className="mt-2">
        <h2 className="underline">Detalle Mensual</h2>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {constants.operations.map(({color, bg, Icon, label, type, subType}) => (
            <div key={subType} className={`${bg} rounded-md p-5 flex justify-between`}>
              <div>
                <div className="flex items-center gap-2">
                  <Icon className={`${color} h-7 w-7`} />
                  <label className={color}>{label}</label>
                </div>
                <p className={`${color} ml-8`}>{currency.format(operationsSum[subType])}</p>
              </div>
              <button onClick={() => operationAdd(type, subType)}>
                <FaPlusSquare className="text-white h-9 w-9" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Amount Modal */}
      <Modal show={modalOpen} size="md" position="center" popup onClose={() => setModalOpen(false)}>
        <div className="p-4 pb-0 text-right">
          <button onClick={modalClose}>
            <FaTimesCircle className="w-8 h-8 hover:rotate-90 ease-out duration-300" />
          </button>
        </div>
        <Modal.Body>
          <div className="text-center flex flex-col items-center justify-center gap-6 px-14 mb-12">
            <h1 className="mb-5 text-2xl font-semibold">Introduce el monto</h1>
            <input
              type="text"
              className="rounded"
              placeholder="0.00"
              value={modalValue}
              onChange={({currentTarget: {value}}) => handleModalInput(value)}
              onKeyUp={modalKeyUp}
            />
            <Button pill onClick={modalApply}>
              Aplicar
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default FinancialPlan
