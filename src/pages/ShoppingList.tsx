import {Card} from "flowbite-react"
import {useState} from "react"
import {FaCartArrowDown} from "react-icons/fa"
import {usePersistedState} from "../hooks/usePersist"
import useShoppingList from "../hooks/useShoppingList"
import {ShoppingListReducer} from "../types"

const ShoppingList: React.FC = () => {
  const [toast, setToast] = useState(false)

  // Get State from Local Storage
  const initialState = usePersistedState({key: "shopping-list"})

  // Application State Shopping List
  const {state: productList, dispatch} = useShoppingList(initialState) as ShoppingListReducer

  const productDelete = (idToDelete: number) => {
    dispatch({
      type: "remove",
      payload: {product: {id: idToDelete}}
    })

    setToast(true)
    setTimeout(() => setToast(false), 1300)
  }

  return (
    <main className="min-h-screen p-5">
      <h1 className="font-lobster tracking-wider text-lg mb-5">Productos en tu Lista:</h1>
      <div className="grid grid-cols-4 xl:grid-cols-8 gap-4">
        {productList.length ? (
          productList.map(({id, image, label, prices}) => (
            <div key={id} className="divide-y col-span-2 md:col-span-1 relative">
              <Card imgSrc={image} imgAlt={label}>
                <div className="flex flex-col items-start border-t pt-2 tracking-wide">
                  {prices?.map(({type, value}) => (
                    <p key={type}>
                      <span className={`${type === "cm" ? "uppercase" : "capitalize"}`}>{type}:</span>{" "}
                      <span className="tracking-wider">#{value}</span>
                    </p>
                  ))}
                </div>
              </Card>
              <button className="absolute bottom-3 right-3" onClick={() => productDelete(id as number)}>
                <FaCartArrowDown className="h-5 w-5 text-amber-400" />
              </button>
            </div>
          ))
        ) : (
          <h2 className="col-span-full ml-2">No hay productos en tu lista aún</h2>
        )}
        <div
          id="toaster"
          className={`
            font-lobster fixed right-5 bg-red-400 text-white p-2 rounded-xl select-none z-10
            animate-pulse ${toast ? "block" : "hidden"}
          `}
        >
          Product Eliminado...
        </div>
      </div>
    </main>
  )
}

export default ShoppingList
