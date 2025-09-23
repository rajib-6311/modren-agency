import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CompanyLogo from "./Components/CompanyLogo";
import Services from "./Components/Services";
import OurWork from "./Components/OurWork";


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
    </div>
  );
};

export default App;