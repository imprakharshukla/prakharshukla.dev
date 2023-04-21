import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {Event} from "../../d";

export const Events = ({events}: { events: Event[] }) => {
    return (<div id="blog" className={"bg-gray-800"}>
        <div className={"py-10 px-10 container mx-auto "}>
            <h1 className={"heading"}>Events<span className={"text-indigo-400"}>.</span></h1>
            <p className={"subheading"}>Highlighting events and talks I host/participate in.</p>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                {
                    events.length === 0 && <div>
                        <p className={"text-gray-400"}>No events for now. Please check back later :)</p>
                    </div>
                }
                {events.length > 0 && events.map(({content, meta}, index) => (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                            visible: {
                                translateX: 0,
                                translateY: 0,
                                opacity: 1,
                            },
                            hidden: {
                                translateX: 0,
                                translateY: 100,
                                opacity: 0,
                            }
                        }}
                        viewport={{once: true}} key={index}
                        transition={{
                            duration: 0.3, delay: index * 0.1
                        }}
                        className='bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105
                        transform transition duration-200 ease-in-out'
                    >
                        <Link href={`/events/${meta.slug}`}>
                            <Image
                                width={650}
                                height={340}
                                alt={meta.title}
                                src={`/${meta.socialImage}`}
                            />
                            <h1 className='pt-4 px-4 font-bold text-white text-lg'>{meta.title}</h1>
                            <h1 className='pt-2 px-4 pb-4 text-gray-400'>{meta.excerpt}</h1>
                        </Link>
                    </motion.div>))}
            </div>
        </div>
    </div>)
}
