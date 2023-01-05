import fetch from "node-fetch";
import dotenv from 'dotenv'
import {SMTPClient} from 'emailjs';

dotenv.config()

const sleep = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 350);
});

console.log({secret: process.env.SITE_SECRET})

export default async function handler(req, res) {

    const {body, method} = req;

    console.log({body, method})


    const {email, subject, message, captcha} = body;

    console.log({email, subject, message, captcha})
    if (method === "POST") {
        if (!email || !subject || !message || !captcha) {
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

                // assuming top-level await for brevity


                const client = new SMTPClient({
                    user: process.env.EMAIL,
                    password: process.env.PASSWORD,
                    host: 'smtp.purelymail.com',
                    port: 465,
                    ssl: true,
                });

                try {
                    const m1 = await client.sendAsync({
                        text: `Email: ${email} \n Subject: ${subject} \n Message: ${message}`,
                        from: 'you <portfolio@prakharshukla.dev>',
                        to: 'someone <hello@prakharshukla.dev>, another <imprakharshukla+portfolio@gmail.com>',
                        subject: '[MESSAGE FROM PORTFOLIO] ' + subject,
                    });
                    console.log(m1);
                } catch (err) {
                    console.error(err);
                }

                await sleep();
                return res.status(200).send("OK");
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