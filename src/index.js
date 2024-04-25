import "./index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import About from "./components/About.js"
import Help from "./components/Help.js"
import Error from "./components/Error.js"
import Resmenu from "./components/Resmenu.js"
import Offers from "./components/Offer.js"
import Coupons from "./components/Coupons.js"
import Membership from "./components/Member.js"
import Review from "./components/Review.js"
import Extra from "./components/Extra.js"
import { Provider } from "react-redux"
import appStore from "./utilities/appStore.js"
import Cart from "./components/Cart.js"
import Order from "./components/Order.js"
import Best from "./components/Best.js";

const AppLayout = () => {
    return <div className="layout">
        <Provider store={appStore}>
            <Header/>
            <Outlet/>
        </Provider>
    </div>
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/help",
                element : <Help/>
            },
            {
                path : "/offers",
                element : <Offers/>
            },
            {
                path : "/coupons",
                element : <Coupons/>
            },
            {
                path : "/membership",
                element : <Membership/>
            },
            {
                path : "/review",
                element : <Review/>
            },
            {
                path : "/extra",
                element : <Extra/>
            },
            {
                path : "/order",
                element : <Order/>
            },
            {
                path : "/cart",
                element : <Cart/>
            },
            {
                path : "/best",
                element : <Best/>
            },
            {
                path : "/restaurant/:resID",
                element : <Resmenu/>
            }
        ]
    }
])

const r = ReactDOM.createRoot(document.getElementById("root"))
r.render(<RouterProvider router={appRouter}/>)