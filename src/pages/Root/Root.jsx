import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PopularCoffees from "../../components/PopularCoffees/PopularCoffees";
import HelmetMaker from "../../utils/HelmetMaker/HelmetMaker";

const Root = () => {
    return (
        <div>
            <HelmetMaker title='Cafe Terrace || Home'/>
            <Navbar/>
            <Banner/>
            <Features/>
            <PopularCoffees/>
            <Footer/>
        </div>
    );
};

export default Root;