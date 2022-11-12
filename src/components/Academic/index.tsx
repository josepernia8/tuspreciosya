import {Link} from "react-router-dom"
import finance from "../../assets/finance-banner_20.jpg"

const Academic: React.FC = () => (
  <>
    <h1 className="text-lg text-purple-500">Bienvenido/a</h1>
    <p>Comienza a cambiar tus finanzas con:</p>
    {[1, 2, 3].map((val) => (
      <Link key={val} to="/financial-planning/1">
        <div className="mt-5 flex rounded border border-solid border-gray-300 shadow-md cursor-pointer">
          <img src={finance} width={120} className="" />
          <div className="p-2">
            <div className="w-fit text-[0.5rem] bg-purple-500 text-white font-semibold rounded-lg py-[2px] px-1">
              CURSO GRATIS
            </div>
            <h3 className="text-purple-500">Finanzas en orden: tips para arrancar</h3>
            <p className="text-xs text-gray-500">10 buenas prácticas para ordenar tus finanzas</p>
            <p className="text-xs text-gray-500 mt-5">1 Módulo | 1 Clase</p>
          </div>
        </div>
      </Link>
    ))}
  </>
)

export default Academic
