import {format} from 'date-fns'
import Head from "next/head";
import {Meta, Post} from "../../d";
import {getPostBySlug} from "../../src/api";
import fs from "fs";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import Alert from "../../components/alert";

interface MDXPost {
    source: MDXRemoteSerializeResult<Record<string, unknown>>,
    meta: Meta
}

export async function getStaticPaths() {
    const files = fs.readdirSync('blog/content');
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
    const {content, meta}: Post = getPostBySlug(slug)
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


export default function PostPage({mdxSource, meta}: MDXPost) {
    console.log({meta})
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
                <div className={"flex items-center -mt-3"}>
                    {/*<RiUser4Fill/>*/}
                    <p className={"text-sm"}>{meta.author}</p>
                </div>
                <p className={"text-sm -mt-1"}>{formatDate(meta.date)}</p>
                <div className={"flex space-x-3"}>
                    {meta.tags.map((tag) => {
                        return (
                            <div key={tag} className={"px-4 text-sm py-1 bg-gray-800 rounded-full"}>{tag}</div>
                        )
                    })}
                </div>
                {/*<div className={"mt-10"} dangerouslySetInnerHTML={{__html: md().render(content)}}/>*/}
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