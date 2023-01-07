import Link from "next/link";

export const CtaButton = ({icon, title, link}) => {
    const Icon = icon;
    return (
        <div>
            <Link href={link} target="_blank"
                className='block hover:translate-x-1 w-fit px-6 py-2 text-lg font-medium text-white transition duration-200 ease-in-out transform bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'
            >
                <div className='flex items-center'>
                    <Icon className='w-6 h-6 mr-3'/>
                    <span className={"text-sm md:text-base"}>{title}</span>
                </div>
            </Link>
        </div>
    );
}