import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HelmetMaker from "../../utils/HelmetMaker/HelmetMaker";
import { FaArrowCircleLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import Footer from "../../components/Footer/Footer";
const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const coffee = {
            coffeeName: form.coffeeName.value,
            chef: form.chef.value,
            supplier: form.supplier.value,
            taste: form.taste.value,
            category: form.category.value,
            details: form.details.value,
            photo: form.photo.value,
            price: form.price.value,
        };

        fetch("http://localhost:5000/coffees", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(coffee),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Coffee Added Successfully!",
                        icon: "success",
                        confirmButtonText: "Close"
                    });
                }
            });
    };
    return (
        <div>
            <HelmetMaker title="Cafe Terrace || Add New Coffee" />
            <Navbar />
            <Link to="/">
                <div className="flex gap-4 items-center text-2xl pl-4 py-3">
                    <FaArrowCircleLeft />{" "}
                    <span className="font-mono ">Back to Home</span>
                </div>
            </Link>

            <div className="max-w-7xl mx-auto bg-gray-100 py-10 mb-10 rounded-md">
                <p className="font-mono text-4xl font-semibold text-center mb-5 px-3">
                    Add New Coffee
                </p>
                <form
                    onSubmit={handleAddCoffee}
                    className="grid md:grid-cols-2 max-w-6xl mx-auto gap-5 px-4"
                >
                    {/* Coffee Name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Coffee Name
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter coffee name"
                            className="input input-bordered w-full"
                            name="coffeeName"
                            required
                        />
                    </label>
                    {/* Chef Name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Chef Name
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter chef name"
                            className="input input-bordered w-full"
                            name="chef"
                        />
                    </label>
                    {/* Supplier Name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Supplier Name
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter supplier name"
                            className="input input-bordered w-full"
                            name="supplier"
                        />
                    </label>
                    {/* Taste*/}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Taste
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="ie: Bitter, Sweet etc."
                            className="input input-bordered w-full"
                            name="taste"
                        />
                    </label>
                    {/* Category */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Category
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter coffee category"
                            className="input input-bordered w-full"
                            name="category"
                        />
                    </label>
                    {/* Details */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Add Details
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter coffee name"
                            className="input input-bordered w-full"
                            name="details"
                        />
                    </label>
                    {/* Photo URL */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Photo URL
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Coffee Image Link"
                            className="input input-bordered w-full"
                            name="photo"
                            required
                        />
                    </label>
                    {/* Price */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Price
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Coffee Image Link"
                            className="input input-bordered w-full"
                            name="price"
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        className="md:col-span-2 mx-auto btn btn-success text-white mt-2"
                    >
                        Add This Coffee To List
                    </button>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default AddCoffee;
