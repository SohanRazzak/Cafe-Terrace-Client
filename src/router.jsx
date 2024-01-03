import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import Error from "./pages/Error/Error";
import AddCoffee from "./pages/AddCoffee/AddCoffee";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UpdateCoffee from "./pages/UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "./pages/CoffeeDetails/CoffeeDetails";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Users from "./pages/Users/Users";
import Messages from "./pages/Messages/Messages";

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
        loader : ({params})=> fetch(`https://cafe-server-zuzm.onrender.com/coffee/${params.id}`)
    },
    {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
        loader : ({params})=> fetch(`https://cafe-server-zuzm.onrender.com/coffee/${params.id}`)
    },
    {
        path : "/SignUp",
        element : <SignUp/>
    },
    {
        path : "/SignIn",
        element : <SignIn/>
    },
    {
        path : '/users',
        element : <PrivateRoute><Users/></PrivateRoute>
    },
    {
        path : '/messages',
        element : <PrivateRoute>
            <Messages/>
        </PrivateRoute>
    }
]);

export default router;
