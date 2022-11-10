import finance from "../../assets/finance.jpg"

const Academic: React.FC = () => (
  <>
    <h1 className="text-lg text-purple-500">Bienvenido/a</h1>
    <p>Comienza a cambiar tus finanzas con:</p>
    {[1, 2, 3, 4].map((val) => (
      <div key={val} className="mt-5 flex rounded border border-solid border-gray-300 shadow-md">
        <img src={finance} width={120} className="aspect-square" />
        <div className="p-2">
          <div className="w-fit text-[0.5rem] bg-purple-500 text-white font-semibold rounded-lg py-[2px] px-1">
            CURSO GRATIS
          </div>
          <h3 className="text-purple-500">Noticias Financieras</h3>
          <p className="text-xs text-gray-500">Todo lo que necesitas saber sobre la actualidad</p>
          <p className="text-xs text-gray-500 mt-2">2 Módulos | 2 Clases</p>
        </div>
      </div>
    ))}
  </>
)

export default Academic
