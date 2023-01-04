import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";

export const Projects = ({projects}) => {


    console.log({projects})
    const [githubProjects, setGithubProjects] = useState({})

    useEffect(() => {
        fetch("https://gh-pinned-repos.egoist.dev/?username=imprakharshukla").then(res => res.json()).then(data => {
            console.log(data)
            setGithubProjects(data)
        }).catch(err => {
            console.log("err")
        })
    }, []);


    return (
        <div id="projects" className={"bg-gray-900"}>
            <div className={"py-10 px-10"}>
                <h1 className={"heading"}>Projects <span className={"text-indigo-400"}>...</span></h1>
                <p className={"subheading"}>Innovative creations that push the boundaries of what is possible</p>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {projects.length > 0 && projects.map(({slug, frontmatter}) => (<div
                        key={slug}
                        className='bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transform transition duration-200 ease-in-out'
                    >
                        <Link href={`/projects/${slug}`}>
                            <Image
                                width={650}
                                height={340}
                                alt={frontmatter.title}
                                src={`/${frontmatter.socialImage}`}
                            />
                            <h1 className='pt-4 px-4 font-bold text-lg'>{frontmatter.name}</h1>
                            <h1 className='pt-2 px-4 pb-4 text-gray-400'>{frontmatter.description}</h1>
                        </Link>
                    </div>))}
                </div>

                {/*<div className={"mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5"}>*/}
                {/*    {projects.length > 0 && projects.map((project, index) => {*/}
                {/*        return (*/}
                {/*            <div className={""} key={index}>*/}
                {/*                <div className={"project__title"}>*/}
                {/*                    <div*/}
                {/*                        className={"bg-gray-800 cursor-pointer rounded-md hover:-translate-y-1 transition transform duration-200 ease-in-out"}>*/}
                {/*                        <div className={""}>*/}
                {/*                            <div className="relative">*/}
                {/*                                <img src={project.image}*/}
                {/*                                     className="object-fill rounded-t-md"/>*/}
                {/*                            </div>*/}
                {/*                            <div className={"px-5 py-5"}>*/}
                {/*                                <p className={"font-bold text-lg text-gray-300 dark:text-gray-300"}>{project.repo}</p>*/}
                {/*                                <p className={"dark:text-gray-400 text-gray-300"}>{project.description}</p>*/}
                {/*                                <div className={"mt-3"}>*/}
                {/*                                    <p className={"font-medium text-gray-400"}>Stars ⭐️*/}
                {/*                                        - <span>{project.stars}</span></p>*/}
                {/*                                    <p className={"font-medium text-gray-400"}>Language- <span*/}
                {/*                                        className={"text-indigo-400"}>{project.language}</span></p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    /!*<a href={project.link} target={"_blank"} rel={"noreferrer"}>{project.repo}</a>*!/*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        </div>
    )
}