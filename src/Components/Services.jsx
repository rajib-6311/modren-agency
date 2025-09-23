import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
import Title from "./Title";

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.marketing_icon
        },
        {
            title: 'Contend Marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.marketing_icon
        },
        {
            title: 'Contend Writing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.content_icon
        },
        {
            title: 'Social Media',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.social_icon
        }
    ]
    return (
            <div id='services' className='relative flex flex-col items-center gap-7 px-4
             sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
               <img className="absolute -top-110 -left-70 -z-1 dark:hidden" src={assets.bgImage2} alt="" />

               <Title title="How can we help?" desc="From strategy to execution, we craft digital solutions that move your business forward."/>

                <div className="flex flex-col md:grid grid-cols-2">
                {
                    servicesData.map((service, index)=>(
                        <ServiceCard key={index} service={service} index={index}/>
                    ))
                }
                </div>
            </div>
    );
};

export default Services;