import React from 'react';
import {Landing} from "../components/landing";
import {About} from "../components/about";
import {Projects} from "../components/projects";
import {Qualifications} from "../components/qualifications";
import {Skills} from "../components/skills";
import fs from "fs";
import matter from "gray-matter";
import {Blog} from "../components/blog";
import {Contact} from "../components/contact";
import Head from "next/head";


export async function getStaticProps() {
    /*Projects*/
    const projectFiles = fs.readdirSync('projects/content');
    const projects = projectFiles.map((fileName) => {


        const slug = fileName.replace('.md', '');

        const readFile = fs.readFileSync(`projects/content/${fileName}`, 'utf-8');
        const {data: frontmatter} = matter(readFile);
        return {
            slug, frontmatter,
        };
    });


    /*Blogs*/
    let files = fs.readdirSync('blog/content');
    files = files.filter((file) => file !== "test.md")
    console.log({files})
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');

        const readFile = fs.readFileSync(`blog/content/${fileName}`, 'utf-8');
        const {data: frontmatter} = matter(readFile);
        return {
            slug, frontmatter,
        };
    });

    console.log({posts})

    return {
        props: {
            posts,
            projects
        },
    };
}

export default function Home({posts, projects}) {
    const URL = "https://prakharshukla.dev"
    return (
        <div className={""}>

            <Head>
                <title>{"Prakhar Shukla"}</title>
                <meta name="description"
                      content="Welcome to my portfolio! Lets make it happen."/>

                <meta property="og:url" content={`${URL}/og_image.png`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Prakhar Shukla"/>
                <meta property="og:description"
                      content={"Welcome to my portfolio! Lets make it happen."}/>
                <meta property="og:image" content={`${URL}/og_image.png`}/>


                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="prakharshukla.dev"/>
                <meta property="twitter:url" content="https://prakharshukla.dev"/>
                <meta name="twitter:title" content="Prakhar Shukla"/>
                <meta name="twitter:description"
                      content={"Welcome to my portfolio! Lets make it happen."}/>
                <meta name="twitter:image" content={`${URL}/og_image.png`}/>
            </Head>
            <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
            <Landing/>
            <About/>
            <Projects projects={projects}/>
            <Qualifications/>
            <Skills/>
            <Blog posts={posts}/>
            <Contact/>
        </div>
    )
}
