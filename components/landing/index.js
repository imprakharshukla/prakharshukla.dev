import {XyzTransition} from "@animxyz/react";
import React from "react";
import {CtaButton} from "../ctaButton";
import {RiAtFill} from "react-icons/ri";

export const Landing = () => {
    return (
        <div  id="home" className="">
            <div className='mx-6 md:mx-14'>
                <div className='flex h-screen items-center justify-center md:justify-start'>
                    <div>
                        <XyzTransition
                            appear
                            duration='auto'
                            xyz='fade stagger flip-up out-flip-down duration-4 ease-out'
                        >
                            <div className={"text-center md:text-start"}>
                                <div
                                    className='font- space-y-4 font-sans text-5xl tracking-wide font-extrabold text-white sm:text-7xl md:text-6xl lg:text-6xl'>
                                    <p className='text-gray-200'>Hi 👋🏻! I am</p>
                                    <p className=''>Prakhar</p>
                                    <p className=''>Shukla<span className={"text-indigo-500"}>.</span></p>
                                    {/* <p className='text-indigo-500'>.dev</p> */}
                                </div>
                                <p className='pt-6 text-lg font-medium text-gray-200 md:text-xl'>
                                    I make Android, Web and Hybrid apps.
                                </p>
                                <div className={"mt-5"}>
                                    <CtaButton icon={RiAtFill} title={"Contact Me"}/>
                                </div>
                            </div>
                        </XyzTransition>
                    </div>
                </div>
            </div>
        </div>
    );

}