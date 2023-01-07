import fs from 'fs';
import matter from "gray-matter";
import md from 'markdown-it'

import {format} from 'date-fns'
import {RiGithubFill, RiLinkM, RiUser4Fill} from "react-icons/ri";
import {SiAppsignal} from "react-icons/si";
import {CtaButton} from "../../components/ctaButton";
import Link from "next/link";
import Head from "next/head";


export async function getStaticPaths() {
    const files = fs.readdirSync('projects/content');
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },

    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params: {slug}}) {
    const fileName = fs.readFileSync(`projects/content/${slug}.md`, 'utf-8');
    const {data: frontmatter, content} = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export default function ProjectPage({frontmatter, content}) {
    const URL = "https://prakharshukla.dev"
    return (

        <div className={""}>
            <Head>
                <title>{frontmatter.name}</title>
                <meta name="description"
                      content={frontmatter.description}/>

                <meta property="og:url" content={`${URL}/${frontmatter.socialImage}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={frontmatter.name}/>
                <meta property="og:description"
                      content={frontmatter.description}/>
                <meta property="og:image" content={`${URL}/${frontmatter.socialImage}`}/>


                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="prakharshukla.dev"/>
                <meta property="twitter:url" content="https://prakharshukla.dev"/>
                <meta name="twitter:title" content={frontmatter.title}/>
                <meta name="twitter:description"
                      content={frontmatter.description}/>
                <meta name="twitter:image" content={`${URL}/${frontmatter.socialImage}`}/>

            </Head>
            <div className="prose mx-auto dark:prose-invert pt-20 min-h-screen py-10 px-10 lg:px-3">
                <div className={"flex justify-start items-center"}>
                    <img className={"object-cover w-40"} src={`/${frontmatter.logo}`} alt=""/>
                </div>

                <h1 className="">{frontmatter.name}</h1>
                <div className={"flex justify-start items-center space-x-3 -my-3"}>
                    <div className={"rounded-md flex-col"}>
                        <div
                            className={
                                "my-2 w-fit rounded-lg bg-gray-300 px-3 py-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                            }
                        >
                            {frontmatter.website}
                        </div>
                    </div>
                    <CtaButton link={frontmatter.website} icon={SiAppsignal} title={"Demo"}/>
                    <Link href={frontmatter.github} className={"rounded-full bg-gray-700 p-2 transform transition cursor-pointer hover:translate-x-1 duration-200 ease-in-out"}>
                        <RiGithubFill className={"text-white text-2xl"}/>
                    </Link>
                </div>
                <h3>{frontmatter.description}</h3>
                <div className={"flex items-center -mt-3"}>
                    <RiUser4Fill/>
                    <p className={"pl-2 text-sm"}>{frontmatter.developer}</p>
                </div>
                <div className={"flex space-x-3"}>
                    {frontmatter.tags.map((tag) => {
                        return (
                            <div key={tag} className={"px-4 text-sm py-1 bg-gray-800 rounded-full"}>{tag}</div>
                        )
                    })}
                </div>
                <div className={"mt-10"} dangerouslySetInnerHTML={{__html: md().render(content)}}/>
                <h1 className={"mt-10"}>Important Links</h1>
                <div className={"grid grid-flow-row gap-6"}>{
                    frontmatter.links.map((link) => {
                        return (
                            <div key={link.link} className={"flex justify-start items-center space-x-3 -my-3"}>
                                <div className={"rounded-md flex-col"}>
                                    <div
                                        className={
                                            "line-clamp-1 my-2 w-fit rounded-lg bg-gray-300 px-3 py-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                                        }
                                    >
                                        {link.link}
                                    </div>
                                </div>
                                <CtaButton link={link.link} icon={RiLinkM} title={link.title}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

const formatDate = (dateString) => {

    return format(new Date(dateString), "do MMMM, yyyy")
}