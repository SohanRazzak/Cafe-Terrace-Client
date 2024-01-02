import navbg from "../../assets/more/nav.jpg";
import cafeIcon from "../../assets/more/logo1.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useContext } from "react";
import { AllContext } from "../../context/GlobalContex/GlobalContext";

const Navbar = () => {
    const {role, setRole, user, logout} = useContext(AllContext);
    const navigate = useNavigate();
    const handleLogout = ()=>{
        logout()
        .then(res => console.log(res.json))
        .catch(err => err.code)
        setRole("user");
        navigate('/')
    }
    return (
        <div
            style={{ backgroundImage: `url('${navbg}')` }}
            className="flex items-center justify-center"
        >
            <div className="text-white">
                {role === "admin" ? <>
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
                            className="btn bg-[#86401b] text-white drawer-button ml-4 font-bold text-2xl"
                        >
                            <AiOutlineMenuUnfold />
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
                                <NavLink to='/users'>Manage Users</NavLink>
                            </li>
                            <li>
                                <NavLink to='/messages'>Messages</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                </> : null}
            </div>

            <div className="flex-grow">
                <Link
                    className="flex items-center justify-center gap-4 p-2"
                    to="/"
                >
                    <img src={cafeIcon} alt="icon" className="w-10" />
                    <h1 className="font-mono text-3xl font-bold text-white">
                        Cafe Terrace
                    </h1>
                </Link>
            </div>
            {
                !user ? <Link to="/SignIn">
                <button className="btn btn-error mr-4 text-white uppercase">
                    Login
                </button>
            </Link> : 
                <button onClick={handleLogout} className="btn btn-error mr-4 text-white uppercase">
                    LogOut
                </button>
            }
        </div>
    );
};

export default Navbar;
