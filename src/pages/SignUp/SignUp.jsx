import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {
    FaArrowCircleLeft,
    FaEyeSlash,
    FaGoogle,
    FaRegEye,
} from "react-icons/fa";
import { useContext, useState } from "react";
import { AllContext } from "../../context/GlobalContex/GlobalContext";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
    const [showpass, setShowpass] = useState(false);
    const { createUser, socialLogin } = useContext(AllContext);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((res) => {
                const user = {
                    firstName: form.firstName.value,
                    lastName: form.lastName.value,
                    displayName: form.firstName.value + " " + form.lastName.value,
                    email,
                    photo: form.photoURL.value,
                    createdAt: res.user.metadata.creationTime,
                    lastLoggeddAt: res.user.metadata.lastSignInTime,
                    verified: res.user.emailVerified,
                    uid : res.user.uid,
                    role: "user",
                };
                fetch("https://cafe-server-zuzm.onrender.com/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(user),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Account Created Successfully!",
                                showConfirmButton: false,
                                timer: 2000,
                                timerProgressBar: true,
                            });
                            navigate('/')
                        }
                    });
            })
            .catch((err) => console.log(err));
    };

    const googleProvider = new GoogleAuthProvider();

    const handleSocialLogin = (provider) => {
        socialLogin(provider)
            .then((res) => {
                if(res.user){
                    const user = {
                        displayName: res.user.displayName,
                        email: res.user.email,
                        photo: res.user.photoURL,
                        createdAt: res.user.metadata.creationTime,
                        lastLoggeddAt: res.user.metadata.lastSignInTime,
                        verified: res.user.emailVerified,
                        uid : res.user.uid,
                        role: "user",
                    };
                    fetch("https://cafe-server-zuzm.onrender.com/users", {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(user),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.modifiedCount>0) {
                                Swal.fire({
                                    title: "Logged In Successfully!",
                                    showConfirmButton: false,
                                    timer: 2000,
                                    timerProgressBar: true,
                                });
                            }
                        });
                }
            })
            .catch((err) => {
                console.log(err.code);
            });
    };

    return (
        <div>
            <Navbar />
            <Link to="/">
                <div className="flex gap-4 items-center text-2xl px-4 py-3 m-3 max-w-fit rounded-md hover:bg-amber-400">
                    <FaArrowCircleLeft />
                    <span className="font-mono ">Back to Home</span>
                </div>
            </Link>

            <div className="max-w-7xl mx-auto bg-gray-100 py-10 mb-10 rounded-md">
                <p className="font-mono text-4xl font-semibold text-center mb-5 px-3">
                    Sign Up Now
                </p>

                <form
                    onSubmit={handleSignUp}
                    className="grid md:grid-cols-2 max-w-6xl mx-auto gap-5 px-4"
                >
                    {/* First Name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">
                                First Name
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter first name"
                            className="input input-bordered w-full"
                            name="firstName"
                            required
                        />
                    </label>
                    {/* Last Name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Last Name
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter last name"
                            className="input input-bordered w-full"
                            name="lastName"
                        />
                    </label>
                    {/* email */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Email Address
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter email address"
                            className="input input-bordered w-full"
                            name="email"
                        />
                    </label>
                    {/* Password */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Password
                            </span>
                        </div>
                        <div className="relative">
                            <input
                                type={showpass ? "text" : "password"}
                                placeholder="Enter a strong password"
                                className="input input-bordered w-full"
                                name="password"
                            />
                            <p
                                className="absolute top-0 right-0 rounded-r-md bg-gray-300 p-4 cursor-pointer"
                                onClick={() => setShowpass(!showpass)}
                            >
                                {showpass ? <FaRegEye /> : <FaEyeSlash />}
                            </p>
                        </div>
                    </label>
                    {/* Photo */}
                    <label className="form-control w-full md:col-span-2">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Photo URL
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter photo URL"
                            className="input input-bordered w-full"
                            name="photoURL"
                        />
                    </label>
                    <p className="ml-2">
                        Already have an account?{" "}
                        <Link
                            className="text-rose-500 font-medium"
                            to="/SignIn"
                        >
                            Sign In
                        </Link>{" "}
                        now!
                    </p>
                    <button
                        type="submit"
                        className="md:col-span-2 mx-auto btn btn-success text-white mt-2 uppercase"
                    >
                        Sign Me Up
                    </button>
                </form>
                <hr className="my-6" />

                <div className="text-center">
                    <button
                        onClick={() => handleSocialLogin(googleProvider)}
                        className="btn btn-outline hover:text-white"
                    >
                        <FaGoogle /> Sign Up With Google
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SignUp;
