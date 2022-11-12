import {Tabs} from "flowbite-react"
import Academic from "../components/Academic"
import FinancialPlan from "../components/FinancialPlan"

const FinancialPlanning: React.FC = () => (
  <main className="mt-1 mx-5 md:mx-20 mb-auto">
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

export default FinancialPlanning
