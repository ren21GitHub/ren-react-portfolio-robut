import { Routes, Route, useLocation } from "react-router-dom"


const NavRoute = () => {
    const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero/>}/>
            <Route path="/technology" element={<Technologies/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/project" element={<ImageSlider/>}/>
            <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}

export default NavRoute