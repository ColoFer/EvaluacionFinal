import {
    Home,
    Services,
    Projects,
    AboutMe,Contact, Skills, Footer } from "../../components";

const PageComplete =()=>{
    return(
        <div>
            <Home/>
            <Services/>
            <Projects/>
            <AboutMe/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    );
};
export {PageComplete}