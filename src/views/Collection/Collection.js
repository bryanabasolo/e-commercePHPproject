import React from "react";
import ScrollTop from "react-scrolltop-button";
import { RiArrowUpCircleFill } from "react-icons/ri";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.js";
import Content from "../Collection/Content"

export default function Collection() {
    return (
    <>
    
    <Navbar transparent/>
        
    <Content />

    <Footer />

    <ScrollTop
    text="back to top"
    distance={700}
    breakpoint={800}
    style={{ backgroundColor: "transparent" }}
    className="scroll-your-role hover:text-red-500"
    speed={500}
    target={0}
    icon={<RiArrowUpCircleFill />}
    />

    </>
    )
}
