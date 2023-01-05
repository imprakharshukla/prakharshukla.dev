import {useRouter} from "next/router";
import Link from "next/link";

const Footer = () => {
    const router = useRouter();

    //if router.pathname is /dashboard then don't show the footer
    if (router.pathname === "/dashboard") {
        return null;
    }


    return (

        <footer className="p-10 bg-white rounded-lg shadow md:px-10 md:py-10 dark:bg-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://prakharshukla.dev/" className="flex items-center mb-4 sm:mb-0">
                    <img src="/images/logo_dark.svg" className="h-8 mr-3" alt="Logo"/>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link href="#skills" className="mr-4 hover:underline md:mr-6 ">Skills</Link>
                    </li>
                    <li>
                        <Link href="#projects" className="mr-4 hover:underline md:mr-6">Projects</Link>
                    </li>
                    <li>
                        <Link href="#blog" className="mr-4 hover:underline md:mr-6">Blog</Link>
                    </li>
                    <li>
                        <Link href="#contact" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© <a
                href="https://prakharshukla.dev/" className="hover:underline">Prakhar Shukla</a>. All Rights Reserved.
    </span>
        </footer>

    )
}

export default Footer