import React from 'react';
import {Landing} from "../components/landing";
import {About} from "../components/about";
import {Projects} from "../components/projects";
import {Qualifications} from "../components/qualifications";
import {Skills} from "../components/skills";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import {Blog} from "../components/blog";
import {Contact} from "../components/contact";


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
    files  = files.filter((files)=> files.endsWith(".md"))
    console.log({files})
    const posts = files.map((fileName) => {

        const slug = fileName.replace('.md', '');

        const readFile = fs.readFileSync(`blog/content/${fileName}`, 'utf-8');
        const {data: frontmatter} = matter(readFile);
        return {
            slug, frontmatter,
        };
    });

    return {
        props: {
            posts,
            projects
        },
    };
}

export default function Home({posts, projects}) {

    return (
        <div className={"space-y-10"}>
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
