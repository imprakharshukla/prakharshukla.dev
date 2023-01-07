import '../styles/globals.css'
import {ThemeProvider} from "next-themes";
import {XyzTransition} from "@animxyz/react";
import {Layout} from "../components/layout";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider attribute="class">
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
                <title>Prakhar Shukla</title>
            </Head>
            <XyzTransition appear duration="auto">
                <div
                    className="">
                    <Layout>
                        <ToastContainer theme={"dark"}/>
                        <Component {...pageProps} />
                    </Layout>
                </div>
            </XyzTransition>
        </ThemeProvider>
    )
}

export default MyApp
