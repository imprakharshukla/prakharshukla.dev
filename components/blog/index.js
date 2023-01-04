import Link from "next/link";
import Image from "next/image";

export const Blog = ({posts}) => {
    return (
        <div  id="blog" className={"bg-gray-800"}>
            <div className={"py-10 px-10"}>
                <h1 className={"heading"}>Blogs<span className={"text-indigo-400"}>.</span></h1>
                <p className={"subheading"}>Code and Creativity: A Symphony of Syntax and Style</p>

                <div className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {posts.map(({slug, frontmatter}) => (<div
                        key={slug}
                        className='bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transform transition duration-200 ease-in-out'
                    >
                        <Link href={`/posts/${slug}`}>
                            <Image
                                width={650}
                                height={340}
                                alt={frontmatter.title}
                                src={`/${frontmatter.socialImage}`}
                            />
                            <h1 className='pt-4 px-4 font-bold text-lg'>{frontmatter.title}</h1>
                            <h1 className='pt-2 px-4 pb-4 text-gray-400'>{frontmatter.description}</h1>
                        </Link>
                    </div>))}
                </div>
            </div>
        </div>
    )
}
