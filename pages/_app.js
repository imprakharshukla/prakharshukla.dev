import '../styles/globals.css'
import {ThemeProvider} from "next-themes";
import {XyzTransition} from "@animxyz/react";
import {Layout} from "../components/layout";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider attribute="class">
            <XyzTransition appear duration="auto">
                <Layout>
                    <ToastContainer theme={"dark"}/>
                    <Component {...pageProps} />
                </Layout>
            </XyzTransition>
        </ThemeProvider>
    )
}

export default MyApp
