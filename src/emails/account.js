const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'caseydietz20@gmail.com',
        subject: 'Welcome to the App',
        text: `Welcome to the app, ${name}. Let me know how you like the app!`
    })
}

const sendCancelEMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'caseydietz20@gmail.com',
        subject: 'Sorry to se you go!',
        text: `Goodbye ${name}. I hope to see you come back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEMail
}