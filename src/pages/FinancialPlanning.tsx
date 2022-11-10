import {Tabs} from "flowbite-react"
import Academic from "../components/Academic"
import FinancialPlan from "../components/FinancialPlan"

const FinancialPlanning: React.FC = () => {
  // Render
  return (
    <main className="mb-8 mt-1 mx-10 md:mx-20 h-[70vh]">
      <Tabs.Group aria-label="Pestañas de planificación" style="underline">
        <Tabs.Item title="Planificacion" active>
          <FinancialPlan />
        </Tabs.Item>
        <Tabs.Item title="Como comprar mejor">
          <Academic />
        </Tabs.Item>
      </Tabs.Group>
    </main>
  )
}

export default FinancialPlanning
