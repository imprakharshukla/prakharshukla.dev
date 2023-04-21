import path from "path";
import fs from "fs";
import {Event, Post, Project} from "../d";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "blog");
export const getSlugs = (): string[] => {
    console.log({POSTS_PATH})
    //const paths = sync(`${POSTS_PATH}/**/*.mdx`);
    const blogFiles = fs.readdirSync('blog/content');
    const blogs = blogFiles.map((fileName) => {
        const slug = fileName.replace('.mdx', '');
        return {
            slug,
        }
    });
    console.log(blogs);
    return []
}

export const getAllPosts = (): Post[] => {
    let files = fs.readdirSync('blog/content');
    files = files.filter((file) => file !== "test.md")
    console.log({files})
    return files.map((fileName) => {
        const slug = fileName.replace('.mdx', '');
        const readFile = fs.readFileSync(`blog/content/${fileName}`, 'utf-8');
        const {data} = matter(readFile);
        return {
            content: "",
            meta: {
                slug: data.slug ?? slug,
                excerpt: data.excerpt ?? "",
                author: data.author ?? "Prakhar Shukla",
                title: data.title ?? slug,
                socialImage: data.socialImage ?? "",
                tags: (data.tags ?? []).sort(),
                date: (data.date ?? new Date().toString())
            }
        };
    });
}
export const getPostBySlug = (slug: string): Post => {
    const readFile = fs.readFileSync(`blog/content/${slug}.mdx`, 'utf-8');
    const {data, content} = matter(readFile);
    return {
        content,
        meta: {
            slug: data.slug ?? slug,
            author: data.author ?? "Prakhar Shukla",
            excerpt: data.excerpt ?? "",
            title: data.title ?? slug,
            socialImage: data.socialImage ?? "",
            tags: (data.tags ?? []).sort(),
            date: (data.date ?? new Date().toString())
        }
    };
}

export const getAllEvents = (): Event[] => {
    let files = fs.readdirSync('events/content');
    files = files.filter((file) => file !== "test.md")
    console.log({files})
    return files.map((fileName) => {
        const slug = fileName.replace('.mdx', '');
        const readFile = fs.readFileSync(`events/content/${fileName}`, 'utf-8');
        const {data} = matter(readFile);
        return {
            content: "",
            meta: {
                collaborators: data.collaborators ?? [],
                date: (data.date ?? new Date().toString()),
                excerpt: data.excerpt ?? "",
                presenter: data.presenter ?? "Prakhar Shukla",
                slug: data.slug ?? slug,
                socialImage: data.socialImage ?? "",
                tags: (data.tags ?? []).sort(),
                time: data.time ?? "",
                title: data.title ?? slug,
                venue: data.venue ?? ""
            }
        };
    });
}
export const getEventBySlug = (slug: string): Event => {
    const readFile = fs.readFileSync(`events/content/${slug}.mdx`, 'utf-8');
    const {data, content} = matter(readFile);
    return {
        content: content,
        meta: {
            collaborators: data.collaborators ?? [],
            date: (data.date ?? new Date().toString()),
            excerpt: data.excerpt ?? "",
            presenter: data.presenter ?? "Prakhar Shukla",
            slug: data.slug ?? slug,
            socialImage: data.socialImage ?? "",
            tags: (data.tags ?? []).sort(),
            time: data.time ?? "",
            title: data.title ?? slug,
            venue: data.venue ?? ""
        }
    };
}


export const getAllProjects = (): Project[] => {
    let files = fs.readdirSync('projects/content');
    files = files.filter((file) => file !== "test.md")
    console.log({files})
    return files.map((fileName) => {
        const slug = fileName.replace('.mdx', '');
        const readFile = fs.readFileSync(`projects/content/${fileName}`, 'utf-8');
        const {data} = matter(readFile);
        return {
            content: "",
            meta: {
                name: data.name ?? slug,
                slug: data.slug ?? slug,
                excerpt: data.excerpt ?? "",
                developer: data.developer ?? "Prakhar Shukla",
                metaTitle: data.metaTitle ?? slug,
                platform: data.platform ?? "",
                logo: data.logo ?? "",
                website: data.website ?? "https://prakharshukla.dev",
                github: data.github ?? "https://prakharsukla.dev/github",
                socialImage: data.socialImage ?? "",
                status: data.status ?? "production",
                tags: (data.tags ?? []).sort(),
                date: (data.date ?? new Date().toString()),
                links: data.links ?? []
            }
        };
    });
}
export const getProjectBySlug = (slug: string): Project => {
    const readFile = fs.readFileSync(`projects/content/${slug}.mdx`, 'utf-8');
    const {data, content} = matter(readFile);
    return {
        content,
        meta: {
            name: data.name ?? slug,
            slug: data.slug ?? slug,
            excerpt: data.excerpt ?? "",
            developer: data.developer ?? "Prakhar Shukla",
            metaTitle: data.metaTitle ?? slug,
            platform: data.platform ?? "",
            logo: data.logo ?? "",
            website: data.website ?? "https://prakharshukla.dev",
            github: data.github ?? "https://prakharsukla.dev/github",
            socialImage: data.socialImage ?? "",
            status: data.status ?? "production",
            tags: (data.tags ?? []).sort(),
            date: (data.date ?? new Date().toString()),
            links: data.links ?? []
        }
    };
}
