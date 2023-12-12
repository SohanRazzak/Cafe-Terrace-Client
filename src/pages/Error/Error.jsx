import { Link } from "react-router-dom";
import error from "../../assets/404/404.gif";
const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={error} className="object-cover w-full h-full" />
            <Link to="/">
                <button className="-mt-10 btn btn-warning text-white">
                    Go Home
                </button>
            </Link>
        </div>
    );
};

export default Error;
