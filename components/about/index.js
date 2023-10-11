import {CtaButton} from "../ctaButton";
import {SiCodechef, SiGithub, SiLeetcode, SiLinkedin, SiTwitter} from "react-icons/si";
import Link from "next/link";

export const About = () => {
    return (
        <div id="about" className={"bg-gray-800"}>
            <div className={"py-10 px-10  container mx-auto "}>
                <h1 className={"heading"}>About me<span className={"text-indigo-400"}>.</span></h1>
                <p className={"subheading"}>I am a sophomore in Computer Science with a strong passion for technology
                    and software development. I have experience developing Android, Web, and Hybrid apps, and I am
                    always eager to learn and expand my skill-set. In addition to my coursework, I enjoy staying up to
                    date with the latest tech trends and exploring new development tools and techniques in my free
                    time. <br/> <br/> As a student, I am highly motivated and organized, with excellent communication
                    and problem-solving abilities. I am able to work independently or as part of a team, and I am always
                    willing to go above and beyond to ensure the success of the projects I work on. <br/>
                    <br/>I am excited to continue growing and learning as a developer, and I am eager to see where my
                    studies and interests in technology take me in the future.</p>

                <div className={"mt-10"}>
                    <div className={"hidden lg:block"}>
                        <div className={"flex flex-wrap justify-start items-center space-x-3"}>
                            <CtaButton link={"/linkedin"} title={"LinkedIn"} icon={SiLinkedin}/>
                            <CtaButton link={"/git"} title={"GitHub"} icon={SiGithub}/>
                            <CtaButton link={"/cc"} title={"CodeChef"} icon={SiCodechef}/>
                            <CtaButton link={"/lc"} title={"Leetcode"} icon={SiLeetcode}/>
                            <CtaButton link={"/twitter"} title={"Twitter"} icon={SiTwitter}/>
                        </div>
                    </div>


                    <div className={"flex space-x-7 block justify-start items-center lg:hidden dark:text-gray-100"}>
                        <p>Connect with me:</p>
                        <Link href="/linkedin">
                            <SiLinkedin
                                className="cursor-pointer hover:-translate-y-1 hover:text-indigo-500 transition transform ease-in-out duration-200 "
                                size={27}/>
                        </Link>
                        <Link href="/git">
                            <SiGithub
                                className="cursor-pointer hover:-translate-y-1 hover:text-indigo-500 transition transform ease-in-out duration-200"
                                size={27}/>
                        </Link>
                        <Link href="/cc">
                            <SiCodechef
                                className="cursor-pointer hover:-translate-y-1 hover:text-indigo-500 transition transform ease-in-out duration-200"
                                size={27}/>
                        </Link>
                        <Link href="/lc">
                            <SiLeetcode
                                className="cursor-pointer hover:-translate-y-1 hover:text-indigo-500 transition transform ease-in-out duration-200"
                                size={27}/>
                        </Link>
                        <Link href="/twitter">
                            <SiTwitter
                                className="cursor-pointer hover:-translate-y-1 hover:text-indigo-500 transition transform ease-in-out duration-200"
                                size={27}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}