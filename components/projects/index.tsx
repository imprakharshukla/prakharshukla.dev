import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {RiGitBranchFill} from "react-icons/ri";
import {motion} from "framer-motion";
import {Project} from "../../d";

export const Projects = ({projects}: { projects: Project[] }) => {


    const [githubProjects, setGithubProjects] = useState<GitHubApiProjects[]>([])
    const [expandedView, setExpandedView] = useState(false)

    useEffect(() => {
        fetch("https://gh-pinned-repos.egoist.dev/?username=imprakharshukla").then(res => res.json()).then(data => {
            setGithubProjects(data)
        }).catch(err => {
            console.log(err)
        })
    }, []);

    return (
        <div id="projects" className={"bg-gray-900 bg-[url('/images/bg.png')] bg-top"}>
            <div className={"py-10 px-10  container mx-auto "}>
                <h1 className={"heading"}>Projects<span className={"text-indigo-400"}>.</span></h1>
                <p className={"subheading"}>Innovative creations that push the boundaries of what is possible</p>

                <div className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                    {projects.length > 0 && projects.map(({content, meta}, index
                    ) => (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={{
                                visible: {
                                    translateX: 0,
                                    translateY: 0,
                                    opacity: 1,
                                },
                                hidden: {
                                    translateX: -100,
                                    translateY: 0,
                                    opacity: 0,
                                }
                            }}
                            viewport={{once: true}} key={index}
                            transition={{
                                duration: 0.3, delay: index * 0.1
                            }}
                            className='bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transform transition duration-200 ease-in-out'
                        >
                            <Link href={`/projects/${meta.slug}`}>
                                <Image
                                    width={650}
                                    height={340}
                                    alt={meta.name}
                                    src={`/${meta.socialImage}`}
                                />
                                <h1 className='pt-4 px-4 text-white font-bold text-lg'>{meta.name}</h1>
                                <h1 className='pt-2 px-4 pb-4 text-gray-400'>{meta.excerpt}</h1>
                            </Link>
                        </motion.div>))}
                </div>
                <div className={"mt-10"}>
                    <button onClick={() => {
                        setExpandedView(!expandedView)
                    }}
                            className='block w-fit px-6 py-2 text-lg font-medium text-white transition duration-200 ease-in-out transform bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'
                    >
                        <div className='flex items-center'>
                            <RiGitBranchFill className='w-6 h-6 mr-3'/>
                            <span>{expandedView ? "Hide Projects" : "More Projects"}</span>
                        </div>
                    </button>
                </div>
                {
                    expandedView &&
                    <div className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                        {githubProjects.length > 0 && githubProjects.map((project, index) => {
                            return (
                                <div className={""} key={index}>
                                    <div className={"project__title"}>
                                        <div
                                            className={"bg-gray-800 cursor-pointer rounded-md hover:-translate-y-1 transition transform duration-200 ease-in-out"}>
                                            <div className={""}>
                                                <div className="relative">
                                                    <img src={project.image}
                                                         className="object-fill rounded-t-md"/>
                                                </div>
                                                <div className={"px-5 py-5"}>
                                                    <p className={"font-bold text-lg text-gray-300 dark:text-gray-300"}>{project.repo}</p>
                                                    <p className={"dark:text-gray-400 line-clamp-4 text-gray-300"}>{project.description}</p>
                                                    <div className={"mt-3"}>
                                                        <p className={"font-medium text-gray-400"}>Stars ⭐️
                                                            - <span>{project.stars}</span></p>
                                                        <p className={"font-medium text-gray-400"}>Language- <span
                                                            className={"text-indigo-400"}>{project.language}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<a href={project.link} target={"_blank"} rel={"noreferrer"}>{project.repo}</a>*/}
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                }
            </div>
        </div>
    )
}


interface GitHubApiProjects {
    owner: string,
    repo: string,
    description: string,
    link: string,
    image: string,
    website: string,
    stars: number,
    forks: number,
    language: string,
    languageColor: string,
}