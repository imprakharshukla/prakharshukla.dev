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
            let formData = new FormData();
            formData.append('secret', process.env.SITE_SECRET);
            formData.append('response', captcha);
            const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
            const result = await fetch(url, {
                body: formData,
                method: 'POST',
            });
            const captchaValidation = await result.json();
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