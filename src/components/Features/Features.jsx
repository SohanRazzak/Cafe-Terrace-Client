import icon1 from '../../../public/images/icons/1.png';
import icon2 from '../../../public/images/icons/2.png';
import icon3 from '../../../public/images/icons/3.png';
import icon4 from '../../../public/images/icons/4.png';

const Features = () => {
    return (
        <div className="bg-gray-200 px-4 py-10 mb-5 md:mb-8">
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto max-w-6xl'>
            <div className='space-y-1'>
                <img src={icon1} alt="" />
                <p className="font-medium font-mono text-2xl">Awesome Aroma</p>
                <p className="font-light">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='space-y-1'>
                <img src={icon2} alt="" />
            <p className="font-medium font-mono text-2xl">High Quality</p>
                <p className="font-light">We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='space-y-1'>
                <img src={icon3} alt="" />
                <p className="font-medium font-mono text-2xl">Pure Grades</p>
                <p className="font-light">The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='space-y-1'>
                <img src={icon4} alt="" />
                <p className="font-medium font-mono text-2xl">Proper Roasting</p>
                <p className="font-light">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
            </div>
        </div>
    );
};

export default Features;