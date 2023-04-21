import React from 'react';
import {Landing} from "../components/landing";
import {About} from "../components/about";
import {Projects} from "../components/projects";
import {Qualifications} from "../components/qualifications";
import {Skills} from "../components/skills";
import {Blog} from "../components/blog";
import {Contact} from "../components/contact";
import {Events} from "../components/events";
import Head from "next/head";
import {getAllEvents, getAllPosts, getAllProjects} from "../src/api";


export async function getStaticProps() {
    /*Projects*/
    const projects = getAllProjects()
    /*Blogs*/
    const posts = getAllPosts()
    /*Events*/
    const events = getAllEvents()

    return {
        props: {
            posts,
            projects,
            events
        },
    };
}

export default function Home({posts, projects, events}) {
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
            <Landing/>
            <About/>
            <Projects projects={projects}/>
            <Qualifications/>
            <Skills/>
            <Events events={events}/>
            <Blog posts={posts}/>
            <Contact/>
        </div>
    )
}
