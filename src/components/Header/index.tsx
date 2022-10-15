import {Navbar} from "flowbite-react"
import {useLayoutEffect} from "react"
import {useLocation} from "react-router-dom"

const Header = () => {
  const {pathname} = useLocation()

  useLayoutEffect(() => {
    const list = document.querySelectorAll("#navBar > ul > li")

    list.forEach((ele) => {
      const item = ele.firstElementChild

      if (item?.getAttribute("href") === pathname) {
        item.classList.add("active")
      } else {
        item?.classList.remove("active")
      }
    })
  }, [pathname])

  return (
    <header id="header" className="bg-amber-400 text-white tracking-wider">
      <Navbar>
        <div className="flex flex-col w-full divide-y">
          {/* Top Header */}
          <div className="flex items-center h-20 w-full">
            <Navbar.Brand href="/">
              <h1 className="font-lobster tracking-wider text-4xl ml-2">PreciosYa</h1>
            </Navbar.Brand>
          </div>
          {/* Bottom Nav */}
          <div className="flex flex-col md:flex-row md:items-center justify-center w-full pt-2.5">
            <div className="">
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse id="navBar">
              <Navbar.Link href="/" active={pathname === "/"}>
                Productos
              </Navbar.Link>
              <Navbar.Link href="/shopping-list" active={pathname === "/shopping-list"}>
                Lista de Compras
              </Navbar.Link>
              <Navbar.Link href="/financial-planning" active={pathname === "/financial-planning"}>
                Planificación Financiera
              </Navbar.Link>
              <Navbar.Link href="/about" active={pathname === "/about"}>
                Nosotros
              </Navbar.Link>
              <Navbar.Link href="/contact" active={pathname === "/contact"}>
                Contactanos
              </Navbar.Link>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
