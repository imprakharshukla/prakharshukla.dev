//new
import Link from "next/link";
import {motion} from "framer-motion";

export const NavBar = ({setIsDrawerOpen, isDrawerOpen}) => {
    const links = [{
        title: "Home", href: "/#home",
    }, {
        title: "About", href: "/#about",
    }, {
        title: "Skills", href: "/#skills",
    }, {
        title: "Projects", href: "/#projects",

    }, {
        title: "Blogs", href: "/#blogs",
    }, {
        title: "Contact", href: "/#contact",
    },];

    return (<div className={"bg-gray-900 bg-opacity-90"}>
            <div className={"lg:mx-14 md:mx-8 mx-8"}>
                <div className={"flex h-16 items-center justify-between"}>
                    <div className={"flex items-center"}>
                        <Link href={"/"} className={"flex-shrink-0"}>
                            <img src="/images/logo_dark.svg" className={"w-20"} alt="logo"/>
                        </Link>
                        <div className={"hidden lg:block"}>
                            <div className={"ml-10 flex items-baseline space-x-4  text-sm "}>
                                {
                                    links.map((link, index) => {
                                        return (
                                            <motion.div key={index}
                                                        initial={{
                                                            translateX: -50,
                                                            translateY: -50,
                                                            opacity: 0,
                                                        }} animate={{
                                                translateX: 0,
                                                translateY: 0,
                                                opacity: 1,
                                            }} transition={{
                                                duration: 0.3, delay: index * 0.05
                                            }}>
                                                <Link
                                                    href={link.href}
                                                    className={"bg-gray-900 text-white px-3 py-2 rounded-md font-medium"}> {link.title} < /Link>
                                            </motion.div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div onClick={() => {
                        setIsDrawerOpen(!isDrawerOpen)
                    }} className={"block lg:hidden"}>
                        <svg data-v-09c808ab="" xmlns="http://www.w3.org/2000/svg" width="31" height="15"
                             className="stroke-current text-white">
                            <g data-v-09c808ab="" fill="none" stroke="#fff" strokeWidth="3">
                                <path data-v-09c808ab="" d="M0 1.5h31M0 13.5h31"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}