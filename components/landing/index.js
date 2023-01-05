import React from "react";
import {CtaButton} from "../ctaButton";
import {RiAtFill} from "react-icons/ri";

export const Landing = () => {
    return (
        <div id="home" className="bg-[url('/images/bg.png')] bg-center min-h-screen">
            <div className='mx-6 md:mx-14'>
                <div className='grid grid-cols-1 md:grid-cols-2 h-screen items-center justify-center md:justify-start'>
                    <div className={"order-2 md:order-1"}>
                        <div className={"text-center md:text-start"}>
                            <div xyz="fade up stagger ease-in-out delay-10"
                                 className='font-sans space-y-4 font-sans text-5xl tracking-wide font-extrabold text-white sm:text-7xl md:text-6xl mt-10 md:mt-0 lg:text-6xl'>
                                <p className='text-gray-200 xyz-nested'>Hi 👋🏻! I am</p>
                                <p xyz="fade left-100% xyz-nested" className=''>Prakhar</p>
                                <p xyz="fade left-100% xyz-nested" className=''>Shukla<span
                                    className={"text-indigo-500"}>.</span></p>
                                {/* <p className='text-indigo-500'>.dev</p> */}
                            </div>

                            <p className='pt-6 text-lg font-medium text-gray-200 md:text-xl'>
                                I make Android, Web and Hybrid apps.
                            </p>
                            <div className={"mt-5 flex justify-center md:justify-start items-center"}>
                                <CtaButton link="#contact" icon={RiAtFill} title={"Contact Me"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"p-12 order-1 md:order-2"}>
                        <img className={"object-cover max-w-sm w-5/6 lg:w-5/6 md:w-3/4 "}
                             src={"/images/landing_dp.png"}/>
                    </div>
                </div>
            </div>
        </div>
    );

}