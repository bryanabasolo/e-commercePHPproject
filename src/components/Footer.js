import React from "react";
import {MdFacebook} from "react-icons/md";
import {VscTwitter} from "react-icons/vsc";

export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
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
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
            St. Dominic College of Asia Library
            </h4>
            <h4 className="text-1xl">
            EMILIO AGUINALDO HIGHWAY BACOOR CITY, PHILIPPINES 4102
            </h4>
            <h5 className="text-sm mt-0 mb-2 text-gray-700">
            (+63) 998 551 8001 (+63) 998 591 2799
            </h5>
            <div className="mt-6">
       
              <a
                href= "https://www.facebook.com/stdominiccollege/" target="_blank"
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button" 
              >
              <MdFacebook />
              </a>

              <a
                href="https://twitter.com/dominic_asia" target="_blank"
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
              <VscTwitter />
              </a>
              
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
                
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>

                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.stdominiccollege.edu.ph/index.php/terms" target="_blank">Terms and Conditions
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.stdominiccollege.edu.ph/index.php/data-privacy" target="_blank">Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#">Site Map
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.stdominiccollege.edu.ph/index.php/component/content/article/2-uncategorised/17-contact-st-dom?Itemid=101"
                        target="_blank">Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              

            </div>
          </div>
        </div>

        <hr className="my-8 border-red-500" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >St. Dominic College of Asia Library{" "}
              </a>

            </div>

            <div className="text-sm text-gray-600 font-semibold py-1">
            All Rights Reserved.
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
