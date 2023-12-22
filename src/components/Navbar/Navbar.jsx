import navbg from "../../assets/more/nav.jpg";
import cafeIcon from "../../assets/more/logo1.png";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
    return (
        <div style={{ backgroundImage: `url('${navbg}')` }} className="flex items-center justify-center">

                <div className="text-white">
                <div className="drawer z-30">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer"
                        className="btn btn-info text-white drawer-button ml-4 font-bold text-2xl"
                    >
                        <AiOutlineMenuUnfold/>
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <a>Sidebar Item 1</a>
                        </li>
                        <li>
                            <a>Sidebar Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>
                </div>

                <div className="flex-grow">
                    <Link className="flex items-center justify-center gap-4 p-2" to="/">
                    <img src={cafeIcon} alt="icon" className="w-10" />
                    <h1 className="font-mono text-3xl font-bold text-white">
                        Cafe Terrace
                    </h1>
                    </Link>
                </div>
            
        </div>
    );
};

export default Navbar;
