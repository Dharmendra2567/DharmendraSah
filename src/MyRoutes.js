import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/layout/Navbar";
import Quote from "./pages/Quote";
import {ProjectShowcase} from "./pages/ProjectShowcase";
import AllQuotes from "./AllQuotes";
import { Contact } from "./pages/Contact";
import About from "./pages/About";
import { Footer } from "./components/Footer";
import ProjectSection from "./components/ProjectSection";

const MyRoutes=()=>{
    return(
        <>
            <BrowserRouter>
             <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/project" element={<ProjectShowcase/>}/>
                {/* <Route path="all" element={<AllQuotes/>}/> */}
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                {/* <Route path="/footer" element={<Footer/>}/> */}

                <Route path="/nav" element={<Navbar/>}/>
                <Route path="/project" element={<ProjectSection/>}/>
             </Routes>
            </BrowserRouter>
        </>
    )
}
export default MyRoutes