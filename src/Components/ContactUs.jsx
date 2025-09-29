import assets from "../assets/assets";
import Title from "./Title";


const ContactUs = () => {
    return (
        <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 1g:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

            <form className="flex flex-col items-center text-sm">
                <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white" for="name">Your Name</label>
                        <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300 dark:border-white" type="text" required/>
                    </div>
                    <div className="w-full">
                        <label className="text-black/70 dark:text-white" for="name">Your Email</label>
                        <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300 dark:border-white" type="email" required />
                    </div>
                </div>

                <div className="mt-6 w-[350px] md:w-[700px]">
                    <label className="text-black/70 dark:text-white" for="name">Message</label>
                    <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300 dark:border-white" required></textarea>
                </div>

             <div className="py-12"> 
                 <a href="#contact-us" className="text-sm max-sm:hidden flex items-center gap-2 bg-blue-800 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all">
                    Contact <img src={assets.arrow_icon} width={14} alt="" />
              </a>
             </div>
            </form>
        </div>
    );
};

export default ContactUs;