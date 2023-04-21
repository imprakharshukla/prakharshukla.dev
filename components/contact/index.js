import {useEffect, useRef, useState} from "react";
import * as yup from "yup";
import {toast} from "react-toastify";
import Turnstile from "react-turnstile";


export const Contact = () => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);
    const [captchaToken, setCaptchaToken] = useState(null);
    const turnstileRef = useRef(null);

    useEffect(() => {

    }, [captchaToken]);

    const validateFormData = (formData) => {

        return new Promise((resolve, reject) => {
            const schema = yup.object().shape({
                email: yup
                    .string()
                    .email()
                    .required(),
                subject: yup.string().required(),
                message: yup.string().required(),
                first_name: yup.string().required(),
                last_name: yup.string().required(),
            });


            schema
                .validate(formData)
                .then(() => {
                    resolve(true)
                })
                .catch(errors => {
                    reject(errors)
                });
        });
    }


    function resetCaptcha() {
        if (turnstileRef.current) {
            turnstileRef.current?.reset()
        }
    }

    function onExpire() {
        setCaptchaToken(null)
        turnstileRef.current?.reset()
    }


    const handleSubmit = async (event) => {
        setLoading(true)
        const fData = new FormData(event.currentTarget);
        event.preventDefault();
        let data = {};
        for (let [key, value] of fData.entries()) {
            console.log(key, value);
            data[key] = value
        }

        try {
            await validateFormData(data)
            console.log({data})

        } catch (error) {
            console.log(error)
            toast.error(error.message);
            setLoading(false)
        }
        console.log({captchaToken})

        if (captchaToken) {
            try {
                const response = await fetch("/api/sendEmail", {
                    method: "POST", body: JSON.stringify({...data, captcha: captchaToken}), headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    toast.success("I will get back to you soon!");
                } else {
                    const error = await response.json();
                    console.log({error});
                    toast.error("Something went wrong, please try again later");
                }
            } catch (error) {
                toast.error(error?.message || "Something went wrong")
            } finally {
                setCaptchaToken(null);
                resetCaptcha()
                setLoading(false)
            }

        } else {
            toast.error("Please verify that you are not a robot");
            setLoading(false)
        }
    };

    return (<div id="contact" className={"bg-gray-800"}>
            <div className={"py-10 px-10  container mx-auto "}>
                <h1 className={"heading"}>Contact me<span className={"text-indigo-400"}>.</span></h1>
                <p className={"subheading"}>Reach out to discuss potential projects, ask questions about my work, or
                    just say hi!</p>

                <div className={"max-w-md"}>
                    <form onSubmit={handleSubmit} ref={formRef}>

                        <div className="mb-4 mt-10">
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" id="email"
                                   name={"email"}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="john@doe.com" required/>
                        </div>

                        <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="firstName"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                    Name</label>
                                <input type="text" id="first_name"
                                       placeholder={"First Name..."}
                                       name={"first_name"}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required/>
                            </div>
                            <div>
                                <label htmlFor="last_name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                    Name</label>
                                <input type="text" id="last_name"
                                       placeholder={"Last Name..."}
                                       name={"last_name"}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required/>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What is
                                this
                                about?</label>
                            <input type="text" id="subject"
                                   placeholder={"Subject..."}
                                   name={"subject"}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   required/>
                        </div>
                        <div className={"mb-4"}>

                            <label htmlFor="message"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                message</label>
                            <textarea id="message" rows="4"
                                      name={"message"}
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Leave a comment..."></textarea>
                        </div>


                        <div className={"mb-4"}>
                            {
                                <Turnstile
                                    ref={turnstileRef}
                                    sitekey="0x4AAAAAAACFaH4Vby0ghcqz"
                                    onVerify={(token) => setCaptchaToken(token)}
                                    onError={(error) => toast.error(error)}
                                    onExpire={onExpire}
                                    autoResetOnExpire={true}
                                />
                            }
                        </div>


                        <div className={"flex"}>
                            {
                                <button type="submit" disabled={loading}
                                        className="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800   flex justify-center items-center">{!loading ? "Submit" :

                                    <svg
                                        className="mx-3 h-5 w-5 animate-spin text-gray-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>}
                                </button>

                            }
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}