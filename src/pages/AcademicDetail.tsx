import {Accordion} from "flowbite-react"
import {useParams} from "react-router-dom"

const Academic: React.FC = () => {
  const {id} = useParams()
  console.log(id)

  return (
    <main className="p-5 mb-auto text-gray-600">
      <h1 className="text-3xl text-purple-500 mb-1">Finanzas en orden: tips para arrancar</h1>
      <h2 className="text-lg text-gray-500">5 buenas prácticas para ordenar tus finanzas</h2>
      <p className="text-sm text-gray-500 mt-2">1 Módulo | 1 Clase</p>

      <h3 className="text-purple-500 font-semibold mt-5">Sobre este curso</h3>
      <p className="text-justify">
        Conoce cuales son y cómo implementar las buenas prácticas para ordenar y mantener saludables tus finanzas, con
        el objetivo de poder comenzar a ahorrar y lograr tus objetivos financieros.
      </p>

      <h4 className="my-8 text-purple-500 font-semibold underline underline-offset-8">Módulo 01</h4>
      <div className="flex flex-col gap-4 text-sm mb-5">
        <p className="text-justify">
          Todas las decisiones que se toman diariamente tienen un efecto en nuestra salud financiera, desde el café que
          compramos a media mañana hasta un almuerzo. Es importante señalar que estos pequeños gastos, si se realizan de
          forma frecuente pueden convertirse en grandes fugas de dinero.
        </p>
        <p className="text-justify">
          El objetivo principal de las finanzas personales reside en la toma de decisiones informadas y acertadas por
          parte de las personas y familias con el fin de optimizar sus recursos, ello implica la creación de un
          presupuesto de ingresos y gastos que permita cubrir las necesidades básicas y que además permita destinar una
          parte de nuestros ingresos al ahorro e igual de importante, a un fondo de emergencia para posibles
          imprevistos.
        </p>
        <p className="text-justify">
          A continuación, 5 consejos que te pueden ayudar a mejorar tus finanzas personales y a alcanzar tus objetivos
          financieros de corto, mediano y largo plazo:
        </p>
      </div>

      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>1. Edúcate financieramente</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col gap-4 text-sm">
              <p className="text-justify">
                Aprender conceptos claves como ingreso, ahorro e incluso inversión es primordial para iniciar el camino
                en el manejo de las finanzas personales. Se puede tomar un curso básico de finanzas, buscar información
                en internet o leer libros relacionados con el tema, lo importante es que inicies un proceso de
                aprendizaje y no detenerse.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>2. Establece un presupuesto personal</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col gap-4 text-sm">
              <p className="text-justify">
                Llevar un seguimiento y control de tus ingresos y gastos de forma mensual o anual es necesario para
                establecer metas de corto y largo plazo, esto te permite reducir o eliminar gastos innecesarios, ahorrar
                para futuros planes, priorizar el ahorro sobre el gasto y manejar tu dinero sabiamente. El presupuesto
                personal es una herramienta financiera vital para identificar excedentes que pueden destinarse al ahorro
                o a la inversión.
              </p>
              <p className="text-justify">
                Es comprensible que al pensar en la palabra “presupuesto” te sientas agobiado y no sepas por donde
                comenzar. Te recomiendo que inicies con un registro sencillo de lo que gastas diariamente, puede ser en
                tu teléfono celular, computadora o alguna agenda, luego cuando hayas identificado cuáles son tus
                ingresos y gastos recurrentes, puedes profundizar un poco más y elaborar un presupuesto más completo.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>3. Separa tus necesidades de tus deseos</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col gap-4 text-sm">
              <p className="text-justify">
                Recuerda que las necesidades son cosas que debes tener para vivir, por ejemplo: alimento, ropa, refugio,
                mientras que los deseos representan cosas que te gustan pero que no necesitas. Prioriza dentro de tu
                presupuesto personal las necesidades básicas, luego de que estas han sido cubiertas puedes asignar otra
                parte de tus ingresos a tus deseos, recordando siempre la importancia del ahorro.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>4. Comienza a invertir ahora</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col gap-4 text-sm">
              <p className="text-justify">
                La capitalización consiste en la reinversión de las ganancias que obtienes como inversor, cuanto más
                tiempo dediques a reinvertir tus ganancias mayor será el valor de tu inversión en un futuro. Para ello
                es aconsejable que tu horizonte de inversión sea de largo plazo, por lo tanto mientras más temprano
                comiences a hacerlo mejor.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>5. Construye un fondo de emergencia</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col gap-4 text-sm">
              <p className="text-justify">
                Todos estamos expuestos a imprevistos, a situaciones que se salen de nuestro control, emergencias
                médicas, accidentes, o cualquier evento inesperado que amerite una salida importante de dinero. Por ello
                es recomendable construir un fondo de emergencia para este tipo de situaciones.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </main>
  )
}

export default Academic
