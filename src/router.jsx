import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import Error from "./pages/Error/Error";
import AddCoffee from "./pages/AddCoffee/AddCoffee";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UpdateCoffee from "./pages/UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "./pages/CoffeeDetails/CoffeeDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
    },
    {
        path: "/addCoffee",
        element: (
            <PrivateRoute>
                <AddCoffee />
            </PrivateRoute>
        ),
    },
    {
        path: "/coffee/update/:id",
        element: 
        <PrivateRoute>
                <UpdateCoffee />
            </PrivateRoute>,
        loader : ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
    },
    {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
        loader : ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
    },
]);

export default router;
