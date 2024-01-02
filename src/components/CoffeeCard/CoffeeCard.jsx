import { PropTypes } from "prop-types";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import TiltComponent from "../Tilt/Tilt";

const CoffeeCard = ({ coffee, coffees, role }) => {
    const { coffeeName, photo, chef, price, _id } = coffee;
    const [allCoffee, setCoffees] = coffees;
    const navigate = useNavigate();

    const handleDelete = (id) => {
        Swal.fire({
            confirmButtonText: "DELETE",
            denyButtonText: "DISMISS",
            title: "Are You Sure?",
            text: "This action can not be reverted!",
            icon: "warning",
            showDenyButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/delete/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Coffee Deleted Successfully",
                                confirmButtonText: "Close",
                            });
                            const remainingCoffee = allCoffee.filter(
                                (c) => c._id !== id
                            );
                            setCoffees(remainingCoffee);
                        }
                    });
            } else if (result.isDenied) {
                Swal.fire({
                    title: "Removal Dismissed!",
                    icon: "info",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
            }
        });
    };
    return (
        <TiltComponent>
            <div onClick={role === "user" ? ()=> navigate(`/coffee/${_id}`) : null} className="m-2 card items-center card-side bg-gray-200 bg-opacity-60 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt={coffeeName}
                    className="h-56 w-48 object-contain p-5"
                />
            </figure>
            <div className="card-body">
                <p>
                    <span className="font-semibold">Name</span> : {coffeeName}
                </p>
                <p>
                    <span className="font-semibold">Chef</span> : {chef}
                </p>
                <p>
                    <span className="font-semibold">Price</span> : {price} $
                </p>
            </div>

            {role === "admin" ? (
                <div className="mr-5 z-30">
                    <div className="flex flex-col gap-2">
                        <Link to={`/coffee/${_id}`}>
                            <button className="btn btn-primary join-item text-white">
                                <FaEye />
                            </button>
                        </Link>
                        <Link to={`/coffee/update/${_id}`}>
                            <button className="btn btn-neutral join-item text-white">
                                <FaEdit />
                            </button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-error join-item text-white"
                        >
                            <FaTrash />
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
        </TiltComponent>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    role: PropTypes.string,
};

export default CoffeeCard;
