import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { AllContext } from "../../context/GlobalContex/GlobalContext";

const PopularCoffees = () => {
    const [coffees, setCoffees] = useState([]);
    const {role} = useContext(AllContext);
    useEffect(() => {
        fetch("https://cafe-server-zuzm.onrender.com/coffees")
            .then((res) => res.json())
            .then((data) => setCoffees(data));
    }, []);

    return (
        <div className="popular-bg">
            <h2 className="text-center text-3xl font-mono my-3 tracking-tight">
                Our Popular Products
            </h2>
            {role === 'admin' ? <Link to="/addCoffee">
                <button className="flex items-center gap-3 mx-auto my-4 bg-warning btn text-white uppercase">
                    <FaCoffee /> Add Coffee
                </button>
            </Link> : null}
            <div className="mx-auto my-5 grid md:grid-cols-2 max-w-6xl gap-5">
                {coffees.slice(0, 6).map((coffee) => (
                    <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={[coffees, setCoffees]}
                        role={role}
                    />
                ))}
            </div>
            {coffees.length > 6 ? (
                <button className="btn btn-error text-white mx-auto block my-8">
                    See All
                </button>
            ) : null}
        </div>
    );
};

export default PopularCoffees;
