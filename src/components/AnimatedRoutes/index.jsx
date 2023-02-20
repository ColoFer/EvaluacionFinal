import React from "react";
import { Routes, Route, useLocation} from "react-router-dom";
import {
    Home,
    Services,
    Projects,
    AboutMe,
    Contact,
    PageComplete,
    Error,
  } from "../";
import { AnimatePresence} from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation()
    return (
      <div className="AnimatedRoutes">
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/EvaluacionFinal" element={<PageComplete />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </AnimatePresence>
      </div>
    );
  };

  export {AnimatedRoutes};