import {
    SiAdobexd,
    SiAndroid,
    SiExpress,
    SiFigma,
    SiFirebase,
    SiGoland,
    SiIos,
    SiJava,
    SiJavascript,
    SiKotlin,
    SiMongodb,
    SiMysql,
    SiNestjs,
    SiNextdotjs,
    SiNuxtdotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSqlite,
    SiTailwindcss,
    SiTypescript,
    SiVuedotjs
} from "react-icons/si";

export const Skills = () => {

    const languages = [
        {
            name: "Kotlin",
            icon: SiKotlin,
            website: "https://kotlinlang.org/"
        },
        {
            name: "Javascript",
            icon: SiJavascript,
            website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            name: "Typescript",
            icon: SiTypescript,
            website: "https://www.typescriptlang.org/"
        },
        {
            name: "Java",
            icon: SiJava,
            website: "https://www.java.com/en/"
        },
        {
            name: "Python",
            icon: SiPython,
            website: "https://www.python.org/"
        },
        {
            name: "Golang",
            icon: SiGoland,
            website: "https://golang.org/"
        }
    ]

    const frameworks = [
        {
            name: "Android",
            icon: SiAndroid,
            website: "https://developer.android.com/"
        },
        {
            name: "React",
            icon: SiReact,
            website: "https://reactjs.org/"
        },
        {
            name: "NextJS",
            icon: SiNextdotjs,
            website: "https://nextjs.org/"
        },
        {
            name: "React Native",
            icon: SiReact,
            website: "https://reactnative.dev/"
        },
        {
            name: "VueJS",
            icon: SiVuedotjs,
            website: "https://vuejs.org/"
        },

        {
            name: "NuxtJS",
            icon: SiNuxtdotjs,
            website: "https://nuxtjs.org/"
        },
        {
            name: "iOS",
            icon: SiIos,
            website: "https://developer.apple.com/ios/"
        },
        {
            name: "ExpressJS",
            icon: SiExpress,
            website: "https://expressjs.com/"
        },
        {
            name: "NestJS",
            icon: SiNestjs,
            website: "https://nestjs.com/"
        },
        {
            name: "Tailwind CSS",
            icon: SiTailwindcss,
            website: "https://tailwindcss.com/"
        }
    ]

    const databases = [
        {
            name: "MongoDB",
            icon: SiMongodb,
            website: "https://www.mongodb.com/"
        },
        {
            name: "PostgreSQL",
            icon: SiPostgresql,
            website: "https://www.postgresql.org/"
        }, {
            name: "MySQL",
            icon: SiMysql,
            website: "https://www.mysql.com/"
        }, {
            name: "SQLite",
            icon: SiSqlite,
            website: "https://www.sqlite.org/index.html"
        },
        {
            name: "Firestore",
            icon: SiFirebase,
            website: "https://firebase.google.com/products/firestore"
        }, {
            name: "Realtime Database",
            icon: SiFirebase,
            website: "https://firebase.google.com/products/realtime-database"
        }
    ]

    const design = [
        {
            name: "Figma",
            icon: SiFigma,
            website: "https://www.figma.com/"
        }, {
            name: "Adobe XD",
            icon: SiAdobexd,
            website: "https://www.adobe.com/products/xd.html"
        }
    ]


    return (
        <div className={"bg-gray-900"} id="skills">
            <div className={"py-10 px-10  container mx-auto "}>
                <h1 className={"heading"}>Skills<span className={"text-indigo-400"}>.</span></h1>
                <p className={"subheading"}>A diverse toolkit of skills at my disposal</p>

                <div>
                    <h2 className={"dark:text-gray-200 text-gray-700 mt-10 mb-6"}>Programming Languages</h2>
                    <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"}>
                        {
                            languages.map((language, index) => {
                                const Icon = language.icon
                                return (
                                    <a href={language.website} target={"_blank"} rel={"noreferrer"}
                                       className={"cursor-pointer hover:text-indigo-500 hover:scale-105 transition transform duration-200 ease-in-out bg-gray-800 p-4 rounded-md flex flex-col items-center justify-center"}
                                       key={language.name}>
                                        <Icon size={20}/>
                                        <p className={"mt-2 text-sm dark:text-gray-400 text-gray-500"}>{language.name}</p>
                                    </a>
                                )
                            })}
                    </div>

                    <h2 className={"dark:text-gray-200 text-gray-700 mt-10 mb-6"}>Frameworks</h2>
                    <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"}>
                        {
                            frameworks.map((framework, index) => {
                                const Icon = framework.icon
                                return (
                                    <a href={framework.website} target={"_blank"} rel={"noreferrer"}
                                       className={"cursor-pointer hover:text-indigo-500 hover:scale-105 transition transform duration-200 ease-in-out bg-gray-800 p-4 rounded-md flex flex-col items-center justify-center"}
                                       key={framework.name}>
                                        <Icon size={20}/>
                                        <p className={"mt-2 text-sm dark:text-gray-400 text-gray-500"}>{framework.name}</p>
                                    </a>
                                )
                            })}
                    </div>


                    <h2 className={"dark:text-gray-200 text-gray-700 mt-10 mb-6"}>Databases</h2>
                    <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"}>
                        {
                            databases.map((database, index) => {
                                const Icon = database.icon
                                return (
                                    <a href={database.website} target={"_blank"} rel={"noreferrer"}
                                       className={"cursor-pointer hover:text-indigo-500 hover:scale-105 transition transform duration-200 ease-in-out bg-gray-800 p-4 rounded-md flex flex-col items-center justify-center"}
                                       key={database.name}>
                                        <Icon size={20}/>
                                        <p className={"mt-2 text-sm dark:text-gray-400 text-gray-500"}>{database.name}</p>
                                    </a>
                                )
                            })}
                    </div>


                    <h2 className={"dark:text-gray-200 text-gray-700 mt-10 mb-6"}>Design</h2>
                    <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"}>
                        {
                            design.map((app, index) => {
                                const Icon = app.icon
                                return (
                                    <a href={app.website} target={"_blank"} rel={"noreferrer"}
                                       className={"cursor-pointer hover:text-indigo-500 hover:scale-105 transition transform duration-200 ease-in-out bg-gray-800 p-4 rounded-md flex flex-col items-center justify-center"}
                                       key={app.name}>
                                        <Icon size={20}/>
                                        <p className={"mt-2 text-sm dark:text-gray-400 text-gray-500"}>{app.name}</p>
                                    </a>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}