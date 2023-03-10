import dotenv from "dotenv";
import mailgun from "mailgun-js";

dotenv.config()


export const sendMessageReceivedEmail = async ({email, first_name, message}) => {
    return new Promise((resolve, reject) => {
        const DOMAIN = process.env.SENDING_EMAIL_DOMAIN;
        const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});
        let data = {
            from: `Prakhar Shukla <${process.env.SENDING_EMAIL_ADDRESS}>`,
            to: email,
            subject: "Thanks for reaching out!",
            template: "message_received",
            'h:X-Mailgun-Variables': JSON.stringify({
                first_name, message
            })
        };
        mg.messages().send(data, function (error, body) {
            if (error) {
                reject(error)
            }
            console.log({body});
            data = {
                from: `Prakhar Shukla <${process.env.SENDING_EMAIL_ADDRESS}>`,
                to: process.env.PERSONAL_EMAIL_ADDRESS,
                subject: "New message received from portfolio!",
                text: `Name: ${first_name} \nEmail: ${email} \nMessage: ${message}`
            }
            mg.messages().send(data, function (error, body) {
                if (error) {
                    reject(error)
                }
                console.log({body});
                resolve()
            });
            resolve()
        });


    })
}