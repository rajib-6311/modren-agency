

const Footer = () => {
    return (
        <footer className="w-full dark:bg-gray-900 dark:text-white bg-slate-50 text-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <a className="text-2xl font-extrabold dark:text-white" href="#">agency.<span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">ai</span></a>
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Empowering creators worldwide with the most advanced AI content creation tools. Transform your ideas
                    into reality.
                </p>
            </div>
            <div className="border-t border-black dark:border-white">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://prebuiltui.com">agency.ai</a> ©2025. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;