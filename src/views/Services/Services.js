import React from "react";
import ScrollTop from "react-scrolltop-button";
import { RiArrowUpCircleFill } from "react-icons/ri";

import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import Rmusic from "./Rmusic.js";

export default function Collection() {
    return (
    <>
    
    <Navbar transparent/>
        
    <Rmusic />
    
    <Footer />

    <ScrollTop
    text="back to top"
    distance={700}
    breakpoint={800}
    style={{ backgroundColor: "transparent" }}
    className="scroll-your-role"
    speed={500}
    target={0}
    icon={<RiArrowUpCircleFill />}
    />

    </>
    )
}
