import React from "react";
import {RiAtFill} from "react-icons/ri";
import {CtaButton} from "../ctaButton";
import {motion} from "framer-motion";


const appsText = ["WEB", "MOBILE", "HYBRID"];
export const Landing = () => {

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const appsTextRef = React.useRef(null);
    const iteration = React.useRef(0);

    const [currentAppText, setCurrentAppText] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            appsTextRef.current.innerText = appsText[currentAppText]
                .split("")
                .map((letter, index) => {
                    if (index < iteration.current) {
                        return appsText[currentAppText][index];
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            console.log(iteration.current, appsText[currentAppText].length)
            if (iteration.current >= appsText[currentAppText].length) {
                clearInterval(interval);
                setTimeout(() => {
                    if (currentAppText === appsText.length - 1) {
                        setCurrentAppText(0);
                    } else
                        setCurrentAppText((currentAppText + 1));
                    iteration.current = 0;
                }, 1000);
            }
            iteration.current += 1 / 3;
        }, 60);

        return () => clearInterval(interval);
    }, [currentAppText]);
    return (
        <div id="home" className="bg-[url('/images/bg.png')] bg-center">
            <div className='px-6 md:px-14 container mx-auto'>
                <div
                    className='grid grid-cols-1 lg:grid-cols-2 items-center lg:py-32  justify-center md:justify-start mb-10 lg:mb-0'>
                    <div className={"order-2 lg:order-1"}>
                        <div className={"text-center md:text-start"}>
                            <motion.div initial={{x: -300, opacity: 0}}
                                        animate={{x: 0, opacity: 1}}
                                        className='font-sans text-center md:text-start space-y-4 font-sans text-5xl tracking-wide font-extrabold text-white sm:text-5xl md:text-6xl mt-10 md:mt-0 lg:text-6xl'>
                                <p className='text-gray-200 xyz-nested'>Hi 👋🏻! I am</p>
                                <p className=''>Prakhar</p>
                                <p className=''>Shukla
                                    <span
                                        className={"text-indigo-500"}>.</span></p>
                            </motion.div>

                            <motion.div initial={{x: -300, opacity: 0}}
                                        animate={{x: 0, opacity: 1}}
                                        className={"flex items-center justify-center md:justify-start"}>
                                <span className='pt-6 flex text-lg font-medium text-gray-200 md:text-xl lg:text-2xl'>
                                    I build &nbsp;
                                    <motion.div key={currentAppText} initial={{x: 10, opacity: 0}}
                                                animate={{x: 0, opacity: 1}} className={""}
                                                ref={appsTextRef}>{appsText[currentAppText]}</motion.div>
                                    &nbsp; apps.
                                </span>
                            </motion.div>


                            <motion.div initial={{y: 300, opacity: 0}}
                                        animate={{y: 0, opacity: 1}}
                                        className={" mt-5 flex justify-center md:justify-start items-center"}>
                                <CtaButton link="#contact" icon={RiAtFill} title={"Contact Me"}/>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div initial={{x: 900, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                className={"p-12 md:pl-0 order-1 lg:order-2 flex md:justify-start lg:justify-center justify-center items-center"}>
                        <img className={"object-cover animate max-w-sm w-4/6 lg:w-11/12 md:w-1/3"}
                             src={"/images/landing_dp.png"}/>
                    </motion.div>
                </div>
            </div>
        </div>
    );

}