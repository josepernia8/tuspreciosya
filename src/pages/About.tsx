import {Link} from "react-router-dom"

const About: React.FC = () => (
  <main className="mb-auto mt-5">
    <div className="px-10 flex flex-col gap-12">
      <section>
        <p className="text-justify mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Si necesitas contactarnos as click{" "}
          <Link to="/contact" className="underline">
            aqui
          </Link>
        </p>
      </section>
    </div>
  </main>
)

export default About
