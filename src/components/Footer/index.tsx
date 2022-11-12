import {Footer} from "flowbite-react"
import {ReactComponent as Facebook} from "../../assets/facebook.svg"
import {ReactComponent as Instagram} from "../../assets/instagram.svg"
import {ReactComponent as Twitter} from "../../assets/twitter.svg"

const FooterComponent: React.FC = () => (
  <div className="mt-16">
    <Footer container id="footer">
      <div className="w-full">
        <div className="flex justify-center md:justify-end">
          <Footer.LinkGroup>
            <Footer.Link href="/contact">Contactanos</Footer.Link>
            <Footer.Link href="#">Siguenos</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="TusPreciosYa" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={Facebook} />
            <Footer.Icon href="#" icon={Instagram} />
            <Footer.Icon href="#" icon={Twitter} />
          </div>
        </div>
      </div>
    </Footer>
  </div>
)

export default FooterComponent
