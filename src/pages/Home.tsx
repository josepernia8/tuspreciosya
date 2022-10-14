import {Card, Carousel} from "flowbite-react"
import {CgSearch} from "react-icons/cg"
import avocado from "../assets/avocado.png"
import category2 from "../assets/category_dairy.png"
import category1 from "../assets/category_meat.png"
import category3 from "../assets/category_milk.png"
import banner1 from "../assets/home_banner_1.png"
import banner2 from "../assets/home_banner_2.png"
import newsletter from "../assets/newsletter.jpg"

const categories = [
  {
    id: 1,
    label: "Viveres",
    image: category1
  },
  {
    id: 2,
    label: "Frutas/Vegetales",
    image: category2
  },
  {
    id: 3,
    label: "Lacteos",
    image: category3
  },
  {
    id: 4,
    label: "Carnicería",
    image: category1
  },
  {
    id: 5,
    label: "Pescadería",
    image: category2
  },
  {
    id: 6,
    label: "Charcutería",
    image: category3
  }
]

const Home: React.FC = () => {
  return (
    <>
      <section id="home-banner">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={5000}>
            <img src={banner1} alt="..." className="bg-blue-300" />
            <img src={banner2} alt="..." className="bg-teal-500" />
          </Carousel>
        </div>
      </section>

      <main className="mt-10 mx-4 md:mx-6">
        <section id="product-categories" className="grid grid-cols-8 gap-4">
          <div></div>
          {categories.map(({id, label, image}) => (
            <button key={id} className="col-span-1 border-2 rounded grid" type="button">
              <span>{label}</span>
              <img src={image} alt={label} className="p-2 aspect-4/5" />
            </button>
          ))}
        </section>

        <div className="w-screen h-6 bg-broad -ml-4 md:-ml-6 mt-3"></div>

        <section className="grid grid-cols-12 gap-4 mt-3 mb-10">
          {/* Search Bar */}
          <form className="col-span-6 col-start-6">
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <CgSearch />
              </div>
              <input
                type="search"
                id="search-products"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Busca un producto..."
              />
            </div>
          </form>

          {/* Testimonial */}
          <article className="col-span-2">
            <Card>
              <div className="flex justify-start">Testimonios</div>
              <div className="flex flex-col items-center">
                <img
                  className="mb-3 h-24 w-24 rounded-full shadow-lg"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="testimonial image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900">María Perez</h5>
                <p className="mt-4 flex">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </Card>
          </article>

          {/* Product Cards */}
          <div className="product-container col-span-10">
            {Array(10)
              .fill(1)
              .map((n, idx) => (
                <div key={idx} className="product-card divide-y">
                  <Card imgSrc={avocado} imgAlt="product">
                    <div className="flex flex-col items-start border-t pt-2">
                      <p>
                        Gama: <span className="bg-green-500 rounded p-1 text-white">1.32$</span>
                      </p>
                      <p>Plaza: 1.32$</p>
                      <p>Forum: 1.32$</p>
                    </div>
                  </Card>
                </div>
              ))}
          </div>
        </section>

        <section id="newsletter" className="w-screen -ml-4 md:-ml-6">
          <img src={newsletter} alt="newsletter" className="w-full h-64" />
        </section>
      </main>
    </>
  )
}

export default Home
