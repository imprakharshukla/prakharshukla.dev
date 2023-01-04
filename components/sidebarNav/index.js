import {IoSchool,} from "react-icons/io5";
import {RiAtFill, RiBook2Fill, RiCodeBoxFill, RiHomeFill, RiUser4Fill} from "react-icons/ri";
import {SiNuxtdotjs} from "react-icons/si";
import Link from "next/link";

export const SidebarNav = ({setIsDrawerOpen, isDrawerOpen}) => {
    return (isDrawerOpen && (
            <div id="drawer-navigation"
                 className={`fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 transform top-0 left-0 w-72 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30`}
                 tabIndex="-1" aria-labelledby="drawer-navigation-label">
                <h5 id="drawer-navigation-label"
                    className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                <button type="button"
                        onClick={() => setIsDrawerOpen(false)}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2">
                        <li>
                            <Link href="#home"
                                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <RiHomeFill/>
                                <span className="ml-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#skills"
                                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <RiUser4Fill/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Skills</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#qualifications"
                                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <IoSchool/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Qualifications</span>

                            </Link>
                        </li>
                        <li>
                            <Link href="#projectw"
                                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <RiCodeBoxFill/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
                                <span
                                    className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">2</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#blog"
                               className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <RiBook2Fill/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Blog</span>
                            </a>
                        </li>
                        <li>
                            <Link href="#contact"
                                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <RiAtFill/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Contact Me</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        )
    )
}