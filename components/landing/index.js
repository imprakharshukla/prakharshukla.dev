import React from "react";
import {CtaButton} from "../ctaButton";
import {RiAtFill} from "react-icons/ri";
import Typewriter from 'typewriter-effect';


export const Landing = () => {
    return (
        <div id="home" className="bg-[url('/images/bg.png')] bg-center">
            <div className='px-6 md:px-14 container mx-auto'>
                <div
                    className='grid grid-cols-1 lg:grid-cols-2 items-center lg:py-32  justify-center md:justify-start mb-10 lg:mb-0'>
                    <div className={"order-2 lg:order-1"}>
                        <div className={"text-center md:text-start"}>
                            <div xyz="fade up stagger ease-in-out delay-10"
                                 className='font-sans text-center md:text-start space-y-4 font-sans text-5xl tracking-wide font-extrabold text-white sm:text-5xl md:text-6xl mt-10 md:mt-0 lg:text-6xl'>
                                <p className='text-gray-200 xyz-nested'>Hi 👋🏻! I am</p>
                                <p xyz="fade left-100% xyz-nested" className=''>Prakhar</p>
                                <p xyz="fade left-100% xyz-nested" className=''>Shukla<span
                                    className={"text-indigo-500"}>.</span></p>
                            </div>


                            <div className={"flex items-center justify-center md:justify-start"}>
                                <p className='pt-6 flex text-lg font-medium text-gray-200 md:text-xl lg:text-2xl'>
                                    I make &nbsp;
                                    <Typewriter
                                        className={"inline"}
                                        options={{
                                            strings: ["Android", "Web", "Hybrid"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />&nbsp;apps.
                                </p>
                            </div>


                            <div className={"mt-5 flex justify-center md:justify-start items-center"}>
                                <CtaButton link="#contact" icon={RiAtFill} title={"Contact Me"}/>
                            </div>
                        </div>
                    </div>
                    <div
                        className={"p-12 md:pl-0 order-1 lg:order-2 flex md:justify-start lg:justify-center justify-center items-center"}>
                        <img className={"object-cover animate max-w-sm w-4/6 lg:w-11/12 md:w-1/3"}
                             src={"/images/landing_dp.png"}/>
                    </div>
                </div>
            </div>
        </div>
    );

}