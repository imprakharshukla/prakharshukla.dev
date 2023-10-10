import {CtaButton} from "../ctaButton";
import {HiDocumentText} from "react-icons/hi";
import {useState} from "react";
import {motion} from "framer-motion";

export const Qualifications = () => {

    const eduQualifications = [{
        school: "Spring Dale College",
        degree: "Senior Year",
        subject: "PCM + Computer Science",
        city: "Lucknow",
        start_year: "2019",
        description: "President of the Computer Science and Mathematics Club",
        end_year: "2020",
    }, {
        school: "Galgotias College of Engineering and Technology",
        degree: "B.Tech",
        subject: "Computer Science + Artificial Intelligence",
        city: "Noida",
        start_year: "2021",
        description: "Part of various Technical Clubs, core member of Loop, the Coding Club",
        end_year: "2025",
    }]

    const workQualifications = [{
        company: "Devriz Technologies LLP",
        position: "Chief Technology Officer",
        city: "Lucknow",
        description: "A startup that I single single-handedly built which is made to scale to infinity and deployed on the cloud with over 300,000 users from the USA, India, Germany, Russia, and hundreds of other countries.",
        start_year: "2021",
        end_year: "Present",
    }]

    const [qualificationSelection, setQualificationSelection] = useState(0);
    return (<div id="qualifications" className={"bg-gray-800"}>
            <div className={"py-10 px-10  container mx-auto "}>
                <h1 className={"heading"}>Qualifications<span className={"text-indigo-400"}>.</span></h1>
                <p className={"subheading"}>Dedication to continuous learning and growth</p>


                <div className={"mt-10"}>

                    <div className={"bg-gray-900 mb-8 p-2 w-fit rounded-xl"}>
                        <div
                            className={"flex justify-between space-x-2 duration-200 ease-in-out transform transition text-white"}>
                            <p onClick={() => {
                                setQualificationSelection(0)
                            }}
                               className={(qualificationSelection === 0 ? ' bg-indigo-500  ' : ' bg-gray-900 ') + `cursor-pointer rounded-lg px-3 py-2`}>Education</p>
                            <p onClick={() => {
                                setQualificationSelection(1)
                            }}
                               className={(qualificationSelection === 1 ? ' bg-indigo-500  ' : ' bg-gray-900 ') + `cursor-pointer rounded-lg px-3 py-2`}>Work</p>
                        </div>
                    </div>

                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {qualificationSelection === 0 && eduQualifications.map((qualification, index) => {
                            return (<li className="mb-10 ml-4" key={qualification.school}>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={{
                                            visible: {
                                                translateX: 0, translateY: 0, opacity: 1,
                                            }, hidden: {
                                                translateX: -50, translateY: 0, opacity: 0,
                                            }
                                        }}
                                        viewport={{once: true}} key={index}
                                        transition={{
                                            duration: 0.3, delay: index * 0.05
                                        }}>
                                        <div
                                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                        <time
                                            className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{qualification.start_year} - {qualification.end_year}
                                        </time>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{qualification.school}</h3>
                                        <p className={"mb-4 text-base font-normal text-gray-500 dark:text-gray-400"}>
                                            {qualification.city}
                                        </p>
                                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{qualification.description}</p>

                                        <p className={"mb-4 text-base font-normal text-gray-400 dark:text-gray-300"}>
                                            {qualification.degree} in {qualification.subject}
                                        </p>
                                    </motion.div>
                                </li>)
                        })}
                    </ol>

                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {qualificationSelection === 1 && workQualifications.map((qualification, index) => {
                            return (<li className="mb-10 ml-4" key={qualification.company}>
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time
                                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{qualification.start_year} - {qualification.end_year}
                                    </time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{qualification.company}</h3>
                                    <p className={"text-base font-normal text-gray-500 dark:text-gray-400"}>
                                        {qualification.position}
                                    </p>
                                    <p className={"mb-4 text-base font-normal text-gray-500 dark:text-gray-400"}>
                                        {qualification.city}
                                    </p>
                                    <p className="mb-4 prose text-base font-normal text-gray-500 dark:text-gray-400">{qualification.description}</p>
                                </li>)
                        })}
                    </ol>
                </div>


                <div className={"mt-10"}>
                    <CtaButton link={"/files/Prakhar_Resume_2023.pdf"} title={"Download Resume"} icon={HiDocumentText}/>
                </div>
            </div>
        </div>)
}