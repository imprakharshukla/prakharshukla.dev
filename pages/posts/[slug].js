import fs from 'fs';
import matter from "gray-matter";
import md from 'markdown-it'
import {format} from 'date-fns'
import Head from "next/head";


export async function getStaticPaths() {
    const files = fs.readdirSync('blog/content');
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
    const fileName = fs.readFileSync(`blog/content/${slug}.md`, 'utf-8');
    const {data: frontmatter, content} = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export default function PostPage({frontmatter, content}) {
    const URL = "https://prakharshukla.dev"
    return (
        <div className={""}>
            <Head>

                <title>{frontmatter.title}</title>
                <meta name="description"
                      content={frontmatter.description}/>


                <meta property="og:url" content={`${URL}/${frontmatter.socialImage}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={frontmatter.title}/>
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
            <div className={"flex justify-center items-center"}>
                <img className={"object-cover opacity-80 h-96 w-full"} src={`/${frontmatter.socialImage}`} alt=""/>
            </div>
            <div className="prose mx-auto dark:prose-invert pt-20 min-h-screen py-10 px-10 lg:px-3">
                <h1 className="">{frontmatter.title}</h1>
                <h3>{frontmatter.description}</h3>
                <div className={"flex items-center -mt-3"}>
                    {/*<RiUser4Fill/>*/}
                    <p className={"text-sm"}>{frontmatter.author}</p>
                </div>
                <p className={"text-sm -mt-1"}>{formatDate(frontmatter.date)}</p>
                <div className={"flex space-x-3"}>
                    {frontmatter.tags.map((tag) => {
                        return (
                            <div key={tag} className={"px-4 text-sm py-1 bg-gray-800 rounded-full"}>{tag}</div>
                        )
                    })}
                </div>
                <div className={"mt-10"} dangerouslySetInnerHTML={{__html: md().render(content)}}/>
            </div>
        </div>
    );
}

const formatDate = (dateString) => {
    return format(new Date(dateString), "do MMMM, yyyy")
}