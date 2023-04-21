export interface Post {
    content: string;
    meta: Meta;
}

export interface Meta {
    title: string;
    date: string;
    socialImage: string;
    excerpt: string;
    tags: string[];
    slug: string;
    author: string;
}

export interface EventMeta {
    title: string;
    date: string;
    socialImage: string;
    excerpt: string;
    tags: string[];
    slug: string;
    presenter: string;
    venue: string;
    time: string;
    collaborators: string[];
}

export interface Event {
    content: string;
    meta: EventMeta;
}

export interface ProjectMeta {
    slug: string
    name: string;
    excerpt: string;
    developer: string;
    metaTitle: string;
    platform: string;
    logo: string;
    website: string;
    github: string;
    socialImage: string;
    status: string;
    date: string;
    links: {
        title: string;
        link: string;
    }[];
    tags: string[];

}

export interface Project {
    content: string;
    meta: ProjectMeta;
}