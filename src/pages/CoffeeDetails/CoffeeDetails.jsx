import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import HelmetMaker from "../../utils/HelmetMaker/HelmetMaker";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const {
        coffeeName,
        photo,
        chef,
        taste,
        category,
        details,
        supplier,
    } = coffee;

    return (
        <div>
            <HelmetMaker title={`Cafe Terrace || ${coffeeName}`} />
            <Navbar />
            <Link to="/">
                <div className="flex gap-4 items-center text-2xl px-4 py-3 m-3 max-w-fit rounded-md hover:bg-amber-400">
                    <FaArrowCircleLeft />
                    <span className="font-mono ">Back to Home</span>
                </div>
            </Link>

            <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl mx-auto bg-gray-100 py-10 mb-10 rounded-md">
                <div>
                    <img
                        src={photo}
                        alt={coffeeName}
                        className="w-64 mx-auto"
                    />
                </div>
                <div className="px-8 md:p-5 space-y-2 md:max-w-md">
                    <h3 className="font-mono font-semibold text-2xl">Niceties</h3>
                <p>
                    <span className="font-semibold">Name</span> : {coffeeName}
                </p>
                <p>
                    <span className="font-semibold">Chef</span> : {chef}
                </p>
                <p>
                    <span className="font-semibold">Supplier</span> : {supplier} $
                </p>
                <p>
                    <span className="font-semibold">Taste</span> : {taste}
                </p>
                <p>
                    <span className="font-semibold">Category</span> : {category}
                </p>
                <p className="font-light">
                    <span className="font-semibold">Details</span> : {details}
                </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default CoffeeDetails;
