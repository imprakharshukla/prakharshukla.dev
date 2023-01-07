import ReCAPTCHA from "react-google-recaptcha";
import {useRef, useState} from "react";
import * as yup from "yup";
import {toast} from "react-toastify";


export const Contact = () => {
    const [loading, setLoading] = useState(false);
    const recaptchaRef = useRef(null);
    const formRef = useRef(null);

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
            setLoading(true)
        }

        let token = recaptchaRef.current.getValue();
        console.log({token})

        if (token) {
            try {
                const response = await fetch("/api/sendEmail", {
                    method: "POST", body: JSON.stringify({...data, captcha: token}), headers: {
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
                recaptchaRef.current.reset();
                if (formRef) {
                    formRef.current.reset();
                }
                setLoading(false)
            }

        } else {
            toast.error("Please verify that you are not a robot");
            setLoading(false)
        }
    };

    return (<div id="contact" className={"bg-gray-900"}>
            <div className={"py-10 px-10  container"}>
                <h1 className={"heading"}>Contact me<span className={"text-indigo-400"}>.</span></h1>
                <p className={"subheading"}>Reach out to discuss potential projects, ask questions about my work, or
                    just say hi!`/</p>

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
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What is this
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
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={"6LcZqdsjAAAAAASfVe2bh_WSFIckLE6fyAlXEGvu"}/>
                        < /div>


                        <div className={"flex"}>
                            {!loading ?
                                <button type="submit" disabled={loading}
                                        className="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800">Submit
                                </button>
                                :
                                <svg aria-hidden="true"
                                     className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"/>
                                </svg>
                            }
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}