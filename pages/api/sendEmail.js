import dotenv from 'dotenv'
import {sendMessageReceivedEmail} from "./_emailHelper/mailGun";

dotenv.config()


export default async function handler(req, res) {

    const {body, method} = req
    const {email, subject, message, captcha, first_name, last_name} = body;
    if (method === "POST") {
        if (!email || !subject || !message || !captcha || !first_name || !last_name) {
            return res.status(422).json({
                message: "Unproccesable request, please provide the required fields",
            });
        }

        try {
            const response = await fetch(
                `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SITE_SECRET}&response=${captcha}`,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                    },
                    method: "POST",
                }
            );
            const captchaValidation = await response.json();
            if (captchaValidation.success) {
                try {
                    await sendMessageReceivedEmail({email, first_name, message})
                    console.log("Email sent ✅")
                    return res.status(200).send("OK");
                } catch (err) {
                    console.log({err})
                    return res.status(400).json({
                        message: "Something went wrong, please try again later",
                    });
                }
            }
            return res.status(422).json({
                message: "Unproccesable request, Invalid captcha code",
            });
        } catch (error) {
            console.log(error);
            return res.status(422).json({message: "Something went wrong"});
        }
    }
    return res.status(404).send("Not found");
}