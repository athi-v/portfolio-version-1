import { useState } from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => setIsOpen(!isOpen);
      
        return (
          <nav className="">
            <div className="max-w-[90%] lg:max-w-screen-xl mx-auto">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center justify-between">
                  <div className="">
                    <Link to="/" className="text-black">
                     A

                    </Link>
                  </div>
                  
                  

                </div>
                <div className="flex-row hidden lg:block ">
                  <Link className="px-[10px]" to="/">Home</Link>
                  <Link className="px-[10px]" to="/projects">Projects</Link>
                  <Link className="px-[10px]" to="/experience">Experience</Link>
                  <Link to="/Snippets">Snippets</Link>

                  </div>
                <div className="md:hidden">
                
                  <button
                    onClick={toggleMenu}
                    className="text-black hover:text-black focus:outline-none focus:text-black"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {isOpen ? (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.343 6.343a1 1 0 011.414 0L12 12.586l6.243-6.243a1 1 0 111.414 1.414L13.414 14l6.243 6.243a1 1 0 01-1.414 1.414L12 15.414l-6.243 6.243a1 1 0 01-1.414-1.414L10.586 14 4.343 7.757a1 1 0 010-1.414z"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 6a1 1 0 011-1h14a1 1 0 010 2H5a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 010 2H5a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H5z"
                        />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 sm:px-3">
                  <Link to="/" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </Link>
                  <Link to="/projects" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Projects
                  </Link>
                  <Link to="/experience" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Experience
                  </Link>
                  <Link to="/snippets" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Snippets
                  </Link>
                </div>
              </div>
            )}
          </nav>
    )
    };
    
    export default Navbar;