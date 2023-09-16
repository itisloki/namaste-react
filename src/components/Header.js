import { useContext } from "react";
import { CART_LOGO, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
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
                    <li>
                        <Link className="link-no-style flex items-center" to="/cart">
                            <img className="w-5 h-5" src={CART_LOGO} />
                            <h2 className="font-bold ml-1">Cart - ({cartItems.length} items)</h2>
                        </Link>
                    </li>
                    {/* <li>
                        <h2>{loggedInUser}</h2>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;