import { Link } from 'react-router-dom';
import logoIcon from '../../assets/more/logo1.png';
import Swal from 'sweetalert2';
import { FaInbox, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {


    const handleContact = e =>{
        e.preventDefault();
        const form = e.target;
        const msg = {
            name : form.senderName.value,
            email : form.email.value,
            message : form.message.value
        }
        
        fetch('http://localhost:5000/message',{
            method : 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(msg)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Message Send Successfully!',
                    timer : 2500,
                    timerProgressBar : true,
                    footer : '<p class="font-bold text-teal-700">We will contact you shortly!</p>',
                    icon : "success",
                    showConfirmButton : false
                })
            }
        })
    }
    return (
        <>
            <footer className="footer items-center md:grid-cols-2 lg:gap-20 p-10 bg-footer-bg text-gray-800 lg:px-40">
                <aside>
                    <p className='flex items-center justify-center gap-4'> 
                        <img src={logoIcon} alt="Cafe Terrace" 
                        className='w-12 h-12'/>
                        <p className='text-3xl font-mono font-bold underline'>Cafe Terrace</p>
                    </p>
                    <p className='max-w-sm tracking-wide font-medium text-base'>Enjoy your coffee with most authentic taste. Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://twitter.com'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-amber-800"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </Link>
                        <Link to='https://youtube.com'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-amber-800"
                            >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </Link>
                        <Link to='https://facebook.com'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-amber-800"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </Link>
                    </div>
                    <header className="footer-title mt-3">Get In Touch</header>
                    <p className='flex gap-4 items-center font-medium'><FaPhoneAlt className='text-amber-800'/> <span>+88 01533 333 333</span></p>
                    <p className='flex gap-4 items-center font-medium'><FaInbox className='text-amber-800'/> <span>info@gmail.com</span></p>
                    <p className='flex gap-4 items-center font-medium'><FaLocationArrow className='text-amber-800'/> <span>72, Wall street, King Road, Dhaka</span></p>

                </aside>
                <aside>
                    <form onSubmit={handleContact}>
                    <input type="text" placeholder="Name" className="input input-bordered w-full mb-3" name='senderName' required/>
                    <input type="text" placeholder="Email" className="input input-bordered w-full mb-3" name='email' required/>
                    <input type="text" placeholder="Message" className="input input-bordered h-24 w-full" name='message' required/>
                    <button className='btn btn-outline rounded-full text-cyan-600 hover:bg-teal-700 font-bold mt-3'>
                        Send Message
                    </button>
                    </form>
                </aside>
            </footer>
        </>
    );
};

export default Footer;
