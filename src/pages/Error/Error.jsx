import { Link } from "react-router-dom";
import error from "../../assets/404/404.gif";
const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
            <Link to="/">
                <button className="mt-10 btn btn-warning text-white">
                    Back To Home
                </button>
            </Link>
            <img src={error} className="object-cover w-full h-full" />
        </div>
    );
};

export default Error;
