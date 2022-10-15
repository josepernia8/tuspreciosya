import {Card, Carousel} from "flowbite-react"
import {useState} from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import {CgChevronLeftO, CgChevronRightO, CgSearch} from "react-icons/cg"
import {categories, products, testimonies} from "../assets/fixtures"
import banner1 from "../assets/home_banner_1.png"
import banner2 from "../assets/home_banner_2.png"
import banner3 from "../assets/home_banner_3.png"
import newsletter from "../assets/newsletter.jpg"
import {Categories} from "../types"

const Home: React.FC = () => {
  const [category, setCategory] = useState(Categories.DAIRY)
  const [term, setTerm] = useState("")

  return (
    <>
      <section id="home-banner">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel
            slideInterval={4000}
            leftControl={<CgChevronLeftO className="h-10 w-10 text-gray-800" />}
            rightControl={<CgChevronRightO className="h-10 w-10 text-gray-800" />}
          >
            <img src={banner1} alt="carousel image 1" className="bg-[#48B5FF] h-full object-cover md:object-fill" />
            <img src={banner2} alt="carousel image 2" className="h-full object-cover md:object-fill" />
            <img src={banner3} alt="carousel image 3" className="h-full object-cover md:object-none" />
          </Carousel>
        </div>
      </section>

      <main className="mb-8 mt-2 md:mt-10 mx-4 md:mx-6">
        {/* Product Categories */}
        <section
          id="product-categories"
          className="category-container grid grid-cols-3 md:grid-cols-6 xl:grid-cols-8 gap-4 select-none"
        >
          <div className="hidden xl:block"></div>
          {categories.map(({id, label, image}) => (
            <button
              key={id}
              className={`category-button md:col-span-1 border-4 rounded grid shadow-md ${
                id === category ? "border-blue-500" : ""
              }`}
              type="button"
              onClick={() => setCategory(id)}
            >
              <span
                className="z-10 text-white font-semibold h-full leading-4"
                style={{gridRow: 1, gridColumn: 1, background: "rgba(0, 0, 0, .3)"}}
              >
                {label}
              </span>
              <img
                src={image}
                alt={label}
                className="aspect-square min-h-[100px]"
                style={{gridRow: 1, gridColumn: 1}}
              />
            </button>
          ))}
        </section>

        <hr className="w-full my-3"></hr>

        <section className="grid grid-cols-12 gap-4 mb-10">
          {/* Search Bar */}
          <div className="col-span-full md:col-span-6 md:col-start-4">
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <CgSearch />
              </div>
              <input
                type="search"
                id="search-products"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Busca un producto..."
                onChange={(e) => setTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Product Cards */}
          <ReactCSSTransitionGroup
            className="col-span-full grid grid-cols-4 xl:grid-cols-8 gap-4 min-h-[200px]"
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {products
              .filter(({cat, label}) => category === cat && (cat.includes(term) || label.includes(term) || term === ""))
              .map(({id, image, label, prices}) => (
                <div key={id} className="divide-y col-span-2 md:col-span-1">
                  <Card imgSrc={image} imgAlt={label}>
                    <div className="flex flex-col items-start border-t pt-2 tracking-wide">
                      {prices.map(({type, value}) => (
                        <p key={type}>
                          <span className={`${type === "cm" ? "uppercase" : "capitalize"}`}>{type}:</span>{" "}
                          <span className="tracking-wider">#{value}</span>
                        </p>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
          </ReactCSSTransitionGroup>
        </section>

        <hr className="w-full my-3"></hr>

        {/* Testimonial & Newsletter */}
        <section id="newsletter-testimonial" className="w-full grid grid-cols-4 auto-rows-[400px] gap-4">
          <div className="col-span-full lg:col-span-1">
            <p className="text-lg underline decoration-wavy decoration-broad">Testimonios</p>
            <Carousel>
              {testimonies.map(({id, name, testimony}) => (
                <Card key={id}>
                  <div className="flex flex-col items-center">
                    <img
                      className="mb-3 h-24 w-24 rounded-full shadow-lg"
                      src={`https://flowbite.com/docs/images/people/profile-picture-${id}.jpg`}
                      alt="testimonial image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900">{name}</h5>
                    <p className="mt-4 flex">{testimony}</p>
                  </div>
                </Card>
              ))}
            </Carousel>
          </div>
          <img src={newsletter} alt="newsletter" className="col-span-full lg:col-span-3 w-full h-full rounded" />
        </section>
      </main>
    </>
  )
}

export default Home
