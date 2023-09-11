import { CART_LOGO, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="flex justify-between">
            <div className="logo-container">
                <Link to="/">
                    <img className="w-[150px]" src={LOGO_URL} />
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link className="link-no-style" to = "/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link className="link-no-style" to = "/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link className="link-no-style" to = "/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link className="link-no-style" to = "/grocery">Grocery</Link>
                    </li>
                    <li className="flex items-center">
                        <h2>Cart</h2>
                        <img className="w-5 h-5" src={CART_LOGO} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;