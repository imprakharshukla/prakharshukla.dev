import {RiCheckboxCircleLine, RiErrorWarningLine, RiInformationLine} from "react-icons/ri";

export default function Alert({type, children}: { type: "success" | "error" | "info" | "warning" }) {
    const classes = getSecondaryPrimaryColors(type)
    return (
        <div
            className={`not-prose my-4 rounded-lg border-l-4 bg-opacity-20 flex space-x-3 items-center text-2xl p-3 ${classes}`}>
            {type === "info" && <RiInformationLine className={`min-w-fit mx-2`}/>}
            {type === "error" && <RiErrorWarningLine className={`min-w-fit mx-2`}/>}
            {type === "success" && <RiCheckboxCircleLine className={`min-w-fit mx-2`}/>}
            {type === "warning" && <RiErrorWarningLine className={`min-w-fit mx-2`}/>}

            <p className={`text-base`}>{children}</p>
        </div>
    );
}

const getSecondaryPrimaryColors = (type: "success" | "error" | "info" | "warning"): string => {
    switch (type) {
        case "success":
            return 'border-green-700 bg-green-300 text-green-300'
        case "error":
            return 'border-red-700 bg-red-300 text-red-300'
        case "info":
            return 'border-blue-700 bg-blue-300 text-blue-300'
        default: {
            return 'border-blue-700 bg-blue-300 text-blue-300'
        }
    }


}