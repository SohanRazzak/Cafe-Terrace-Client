import navbg from "../../assets/more/nav.jpg";
import cafeIcon from '../../assets/more/logo1.png';

const Navbar = () => {
    return (
        <div style={{ backgroundImage: `url('${navbg}')` }}
        className="flex items-center justify-center gap-4 p-2"
        >
            <img src={cafeIcon} alt="icon" className="w-10"/>
            <h1 className="font-mono text-3xl font-bold text-white">Cafe Terrace</h1>
        </div>
    );
};

export default Navbar;
