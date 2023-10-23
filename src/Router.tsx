import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index.tsx";
import { Checkout } from "./pages/Checkout/index.tsx";
import { DefaultLayout } from "./layouts/DefaultLayout/index.tsx";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>} >
                <Route path="/" element={<Home/>} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>
        </Routes>
    )
}