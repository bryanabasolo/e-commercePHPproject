import React from "react";
import Link from 'next/link';

import { useRouter } from "next/dist/client/router";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
          <a
            className={
              (props.transparent ? "text-black" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            
          >
            DLRC
          </a>
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>

        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >

          <ul className="flex flex-col lg:flex-row list-none mr-auto">

            <li className="flex items-center">
            <Link href="/">
              <a
                className={
                  router.pathname == "/" ? "text-black font-bold" : 
                  (props.transparent
                    ? "lg:text-red-500 lg:hover:text-black text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
              
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " far fa-file-alt text-lg leading-lg mr-2"
                  }
                />{" "}
                Home
              </a>
              </Link>
            </li>
            
            
            <li className="flex items-center">
            <Link href="/collection">
              <a
                className={
                  router.pathname == "/collection" ? "text-black font-bold" :
                  (props.transparent
                    ? "lg:text-red-500 lg:hover:text-black text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " far fa-file-alt text-lg leading-lg mr-2"
                  }
                />{" "}
                Collection
              </a>
              </Link>
            </li>

            <li className="flex items-center">
            <Link href="/services">
              <a
                className={
                router.pathname == "/services" ? "text-black font-bold" :
                  (props.transparent
                    ? "lg:text-red-500 lg:hover:text-black text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
              
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " far fa-file-alt text-lg leading-lg mr-2"
                  }
                />{" "}
                Services and Facilities
              </a>
            </Link>
            </li>

            <li className="flex items-center">
            <Link href="/about_us">
              <a
                className={
                router.pathname == "/about_us" ? "text-black font-bold" :
                  (props.transparent
                    ? "lg:text-red-500 lg:hover:text-black text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " far fa-file-alt text-lg leading-lg mr-2"
                  }
                />{" "}
                About Us
              </a>
            </Link>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-red-500 lg:hover:text-black text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="http://sdcalibrary.com/webopac/" target="_blank"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " far fa-file-alt text-lg leading-lg mr-2"
                  }
                />{" "}
                OPAC
              </a>
            </li>

          </ul>

          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="/"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " far fa-file-alt text-lg leading-lg mr-2"
                  }
                />{" "}
                <img src="/img/sdcalogo.png" alt="..." class="h-16 w-auto mr-0"/>
              </a>
            </li>
          </ul>
                
        </div>
      </div>
    </nav>
  );
/*
  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
  <li className="flex items-center">
    <a
      className={
        (props.transparent
          ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
          : "text-gray-800 hover:text-gray-600") +
        " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
      }
      href="##"
    >
      <i
        className={
          (props.transparent
            ? "lg:text-gray-300 text-gray-500"
            : "text-gray-500") +
          " far fa-file-alt text-lg leading-lg mr-2"
        }
      />{" "}
      Testpage
    </a>
  </li>
</ul>

<img src="logo.png" alt="Logo" class="h-8 w-8 mr-2"/>
*/
}
