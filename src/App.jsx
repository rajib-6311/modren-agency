import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CompanyLogo from "./Components/CompanyLogo";
import Services from "./Components/Services";
import OurWork from "./Components/OurWork";
import Teams from "./Components/Teams";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";


const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.
  getItem('theme') : 'light')

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
      <CompanyLogo/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default App;