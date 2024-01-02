import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import bg_1 from "../../../src/assets/more/3.png";
import bg_2 from "../../../src/assets/more/17.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable : true}}
            >
                <SwiperSlide>
                    <div
                        className="hero min-h-[calc(100vh-80px)]"
                        style={{
                            backgroundImage: `url(${bg_1})`,
                        }}
                    >
                        <div className="hero-overlay bg-opacity-30"></div>

                        <div className="hero-content text-center md:text-left text-neutral-content">
                            <div className="max-w-md md:w-full md:ml-[380px] md:mr-8">
                                <h1 className="mb-5 text-4xl font-mono font-bold">
                                    Would you like a Cup of Delicious Coffee?
                                </h1>
                                <p className="mb-5">
                                    It&#39;s coffee time - Sip & Savor -
                                    Relaxation in every sip! Get the nostalgia
                                    back!! Your companion of every moment!!!
                                    Enjoy the beautiful moments and make them
                                    memorable.
                                </p>
                                <button className="btn btn-primary bg-amber-500 hover:bg-amber-600">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-[calc(100vh-80px)]"
                        style={{
                            backgroundImage: `url(${bg_2})`,
                        }}
                    >
                        <div className="hero-overlay bg-opacity-30"></div>

                        <div className="hero-content text-center md:text-left text-neutral-content">
                            <div className="max-w-md md:w-full md:ml-[380px] md:mr-8">
                                <h1 className="mb-5 text-4xl font-mono font-bold">
                                    Experience Coffee Perfection
                                </h1>
                                <p className="mb-5">
                                    Let us guide you through the journey. From
                                    selecting the perfect beans to crafting the
                                    perfect brew, we&#39;re here to help you
                                    unlock the full potential of your coffee
                                    experience.
                                </p>
                                <button className="btn btn-primary bg-amber-500 hover:bg-amber-600">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
