import React, { lazy, Suspense, useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Shimmer from "./src/components/Shimmer";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

const Grocery = lazy(() => import("./src/components/Grocery"));


const AppLayout = () => {
    const [username, setUserName] = useState('');
    useEffect(() => {
        const data = {
            user: 'Lokesh Kumar'
        }
        setUserName(data.user);
    },[])

    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: username, setUserName }}>
            <div className='App'>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);