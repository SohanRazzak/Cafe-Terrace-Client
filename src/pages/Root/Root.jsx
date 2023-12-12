import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import HelmetMaker from "../../utils/HelmetMaker/HelmetMaker";

const Root = () => {
    return (
        <div>
            <HelmetMaker title='Cafe Terrace || Home'/>
            <Navbar/>


            <Footer/>
        </div>
    );
};

export default Root;