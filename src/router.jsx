import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import Error from "./pages/Error/Error";
import AddCoffee from "./pages/AddCoffee/AddCoffee";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        errorElement : <Error/>
    },
    {
        path : '/addCoffee',
        element: <PrivateRoute><AddCoffee/></PrivateRoute>
    }
])

export default router;