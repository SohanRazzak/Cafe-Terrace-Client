import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        errorElement : <Error/>
    }

])

export default router;