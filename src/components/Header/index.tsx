import {Navbar} from "flowbite-react"
import {useLocation} from "react-router-dom"
import Logo from "../../assets/logo.png"

const Header = () => {
  const {pathname} = useLocation()

  return (
    <header>
      <Navbar border>
        <div className="flex flex-col w-full divide-y">
          {/* Top Header */}
          <div className="flex items-center h-20 w-full">
            <Navbar.Brand>
              <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
            </Navbar.Brand>
          </div>
          {/* Bottom Nav */}
          <div className="flex items-center justify-center w-full pt-2.5">
            <div className="md:hidden">
              <Navbar.Toggle />
            </div>
            <div className="hidden md:block">
              <Navbar.Collapse>
                <Navbar.Link href="/" active={pathname === "/"}>
                  Productos
                </Navbar.Link>
                <Navbar.Link href="/shopping-list" active={pathname === "/shopping-list"}>
                  Lista de Compras
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
        </div>
      </Navbar>
    </header>
  )
}

export default Header
