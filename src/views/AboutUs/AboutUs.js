import React from "react";
import ScrollTop from "react-scrolltop-button";
import { RiArrowUpCircleFill } from "react-icons/ri";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.js";
import Vmo from "./Vmo";
import Faculty from "./Faculty";
import Time from "./Time";
import Policies from "./Policies";

export default function AboutUs() {
    return (
    <>
    
    <Navbar transparent/>
        
    <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url(/img/sdcabg.jpg)"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-20 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                        
                    </div>
                  </div>
                
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700 mt-5">
                          About Us
                        </span>
                      </div>                     
                    </div>
                  </div>

                </div>
                       
              </div>
            
            <Vmo/>

            <Faculty/>

            <Time/>

            <div className="text-left">
            <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
            <h3 className="fas fa-briefcase mb-10 text-2xl font-semibold text-center text-red-500">
            DLRC Policies
            </h3>
            
            <Policies color="red" />
              
            </div>
            </div>
            </div>

            </div>
          </div>
        </section>
      </main>

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
