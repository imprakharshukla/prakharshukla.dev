import fs from 'fs';

import {format} from 'date-fns'
import {RiFlaskFill, RiGithubFill, RiLinkM, RiShieldCheckFill, RiTestTubeFill, RiUser4Fill} from "react-icons/ri";
import {SiAppsignal} from "react-icons/si";
import {CtaButton} from "../../components/ctaButton";
import Link from "next/link";
import Head from "next/head";
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {Post, ProjectMeta} from "../../d";
import {getPostBySlug, getProjectBySlug} from "../../src/api";
import {serialize} from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import Alert from "../../components/alert";


interface MDXProject {
    source: MDXRemoteSerializeResult<Record<string, unknown>>,
    meta: ProjectMeta
}

export async function getStaticPaths() {
    const files = fs.readdirSync('projects/content');
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.mdx', ''),
        },

    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params: {slug}}) {
    const {content, meta}: Post = getProjectBySlug(slug)
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, {
                    behavior: "wrap"
                }],
                rehypeHighlight
            ]
        }
    })
    return {
        props: {
            mdxSource,
            meta,
        },
    };
}


const ProjectStatusComponent = ({status}) => {
    if (status.toLowerCase().includes("Production".toLowerCase())) {
        return (
            <div
                className={"px-3 bg-green-700 not-prose py-2 bg-opacity-20 flex justify-around items-center w-fit rounded-lg space-x-3"}>
                <RiShieldCheckFill size={20} className={"text-green-600 text-2xl"}/>
                <p className={"text-green-600"}>{status}</p>
            </div>
        )
    } else if (status.toLowerCase().includes("Beta".toLowerCase())) {
        return (
            <div
                className={"px-3 bg-yellow-700 not-prose py-2 bg-opacity-40 flex justify-around items-center w-fit rounded-lg space-x-3"}>
                <RiTestTubeFill size={20} className={"text-yellow-600 text-2xl"}/>
                <p className={"text-yellow-600"}>{status}</p>
            </div>
        )
    } else if (status.toLowerCase().includes("Alpha".toLowerCase())) {
        return (
            <div
                className={"px-3 bg-red-700 not-prose py-2 bg-opacity-30 flex justify-around items-center w-fit rounded-lg space-x-3"}>
                <RiFlaskFill size={20} className={"text-red-600 text-2xl"}/>
                <p className={"text-red-500"}>{status}</p>
            </div>
        )
    }

}


export default function ProjectPage({mdxSource, meta}: MDXProject) {
    console.log({mdxSource})
    const URL = "https://prakharshukla.dev"
    return (

        <div className={""}>
            <Head>
                <title>{meta.name}</title>
                <meta name="description"
                      content={meta.excerpt}/>

                <meta property="og:url" content={`${URL}/${meta.socialImage}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={meta.name}/>
                <meta property="og:description"
                      content={meta.excerpt}/>
                <meta property="og:image" content={`${URL}/${meta.socialImage}`}/>


                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="prakharshukla.dev"/>
                <meta property="twitter:url" content="https://prakharshukla.dev"/>
                <meta name="twitter:title" content={meta.name}/>
                <meta name="twitter:description"
                      content={meta.excerpt}/>
                <meta name="twitter:image" content={`${URL}/${meta.socialImage}`}/>

            </Head>
            <div className="prose mx-auto dark:prose-invert pt-20 min-h-screen py-10 px-10 lg:px-3">
                <div className={"flex justify-start items-center"}>
                    <img className={"object-cover w-40"} src={`/${meta.logo}`} alt=""/>
                </div>

                <h1 className="">{meta.name}</h1>
                <div className={"flex justify-start items-center space-x-3 -my-3"}>
                    <div className={"rounded-md flex-col"}>
                        <div
                            className={
                                "my-2 w-fit rounded-lg bg-gray-300 px-3 py-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                            }
                        >
                            {meta.website}
                        </div>
                    </div>
                    <CtaButton link={meta.website} icon={SiAppsignal} title={"Demo"}/>
                    <Link href={meta.github}
                          className={"rounded-full bg-gray-700 p-2 transform transition cursor-pointer hover:translate-x-1 duration-200 ease-in-out"}>
                        <RiGithubFill className={"text-white text-2xl"}/>
                    </Link>
                </div>
                <h3>{meta.excerpt}</h3>
                <div className={"flex items-center -mt-3"}>
                    <RiUser4Fill/>
                    <p className={"pl-2 text-sm"}>{meta.developer}</p>
                </div>
                <div className={"flex space-x-3"}>
                    {meta.tags.map((tag) => {
                        return (
                            <div key={tag} className={"px-4 text-sm py-1 bg-gray-800 rounded-full"}>{tag}</div>
                        )
                    })}
                </div>
                <div className={"my-10"}>
                    <ProjectStatusComponent status={meta.status}/>
                </div>
                <div className={"mt-10"}>
                    <MDXRemote {...mdxSource} components={{Alert}}/>
                </div>
                <h1 className={"mt-10"}>Important Links</h1>
                <div className={"grid grid-flow-row gap-6"}>{
                    meta.links.map((link) => {
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