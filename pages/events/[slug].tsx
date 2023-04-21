import {format} from 'date-fns'
import Head from "next/head";
import {EventMeta, Post} from "../../d";
import {Event} from "../../d";
import {getEventBySlug} from "../../src/api";
import fs from "fs";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import Alert from "../../components/alert";
import {RiMapPin2Fill, RiUser4Fill} from "react-icons/ri";

interface MDXEvent {
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>,
    meta: EventMeta
}

export async function getStaticPaths() {
    const files = fs.readdirSync('events/content');
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
    const {content, meta}: Event = getEventBySlug(slug)
    const mdxSource = await serialize(content, {
        mdxOptions: {
            development: process.env.NODE_ENV === "development",
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


export default function PostPage({mdxSource, meta}: MDXEvent) {
    const URL = "https://prakharshukla.dev"
    return (
        <div className={""}>
            <Head>
                <title>{meta.title}</title>
                <meta name="description"
                      content={meta.excerpt}/>


                <meta property="og:url" content={`${URL}/${meta.socialImage}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:description"
                      content={meta.excerpt}/>
                <meta property="og:image" content={`${URL}/${meta.socialImage}`}/>


                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="prakharshukla.dev"/>
                <meta property="twitter:url" content="https://prakharshukla.dev"/>
                <meta name="twitter:title" content={meta.title}/>
                <meta name="twitter:description"
                      content={meta.excerpt}/>
                <meta name="twitter:image" content={`${URL}/${meta.socialImage}`}/>

            </Head>
            <div className={"flex justify-center items-center"}>
                <img className={"object-cover opacity-80 h-96 w-full"} src={`/${meta.socialImage}`} alt=""/>
            </div>
            <div className="prose mx-auto dark:prose-invert pt-20 min-h-screen py-10 px-10 lg:px-3">
                <h1 className="">{meta.title}</h1>
                <h3>{meta.excerpt}</h3>
                <div
                    className={"p-3 not-prose mb-7 w-fit border-l-4 border-indigo-500 bg-gray-800 rounded-lg bg-opacity-40"}>
                    <div className={"flex p-2 items-center space-x-3"}>
                        <div className={"flex items-center"}>
                            <RiUser4Fill className={"mr-2"}/>
                            <p className={"text-sm"}>{meta.presenter}</p>
                        </div>
                        <div className={"flex items-center"}>
                            <RiMapPin2Fill className={"mr-2"}/>
                            <p className={"text-sm"}>{meta.venue}</p>
                        </div>
                    </div>
                    <p className={"text-sm p-2"}>{`Starts @ ${formatDate(meta.date)}- ${meta.time}`}</p>
                </div>


                <div className={"flex space-x-3"}>
                    {meta.tags.map((tag) => {
                        return (
                            <div key={tag} className={"px-4 text-sm py-1 bg-gray-800 rounded-full"}>{tag}</div>
                        )
                    })}
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-800"/>
                <div className={"mt-10"}>
                    <MDXRemote {...mdxSource} components={{Alert}}/>
                </div>
            </div>
        </div>
    );
}

const formatDate = (dateString) => {
    return format(new Date(dateString), "do MMMM, yyyy")
}