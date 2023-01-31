import {useRouter} from "next/router";
import Link from "next/link";
import {SiKofi} from "react-icons/si";

const Footer = () => {
    return (
        <div className={""}>
            <div
                className={"bg-indigo-500 px-4 md:pl-10 lg:pl-10 py-6 rounded-t-xl "}>
                <div className={"flex items-center justify-between container mx-auto"}>
                    <div className={"w-1/3"}>
                        <p className={"text-white text-xl font-bold"}>Like my work?</p>
                    </div>
                    <div>
                        <Link href={"https://prakharshukla.dev/kofi"}
                              className='block active:scale-95 w-fit px-6 py-2 text-lg font-medium text-white transition duration-200 ease-in-out transform bg-gray-100 rounded-lg shadow-md hover:bg-gray-300 text-indigo-500 ring-offset-current ring-offset-2'
                        >
                            <div className='flex items-center'>
                                <SiKofi className='w-6 h-6 mr-3'/>
                                <span className={"text-sm md:text-base"}>Donate</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <footer className="p-10 bg-white rounded-lg shadow md:px-10 md:py-10 dark:bg-gray-800">
                <div className={"container mx-auto"}>
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://prakharshukla.dev/" className="flex items-center mb-4 sm:mb-0">
                            <img src="/images/logo_dark.svg" className="h-8 mr-3" alt="Logo"/>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link href="/#skills" className="mr-4 hover:underline md:mr-6 ">Skills</Link>
                            </li>
                            <li>
                                <Link href="/#projects" className="mr-4 hover:underline md:mr-6">Projects</Link>
                            </li>
                            <li>
                                <Link href="/#blog" className="mr-4 hover:underline md:mr-6">Blog</Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <span
                        className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">{"Made with ☕️ by ©"}<a
                        href="https://prakharshukla.dev/" className="hover:underline">Prakhar Shukla</a>. All Rights Reserved.
    </span>
                    <span className="block mt-3 text-sm text-gray-500 sm:text-center dark:text-gray-400"></span>
                </div>
            </footer>
        </div>


    )
}

export default Footer