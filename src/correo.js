const nodemailer = require('nodemailer');

function createSendMail(mailConfig) {
    const transporter = nodemailer.createTransport(mailConfig);
    return function sendMail ({to, subject, text, html, attachments}) {
        const mailOptions = { from: mailConfig.auth.user, to, subject, text, html, attachments};
        return transporter.sendMail(mailOptions);
    }
}

function createSendMailGmail() {
    return createSendMail ({
        host: 'smtp.gmail.com',
        port: 587,
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    })
}

const sendMail = createSendMailGmail();

async function main() {
    const emailAccount = 'marcopontiz@gmail.com';
    const emailSubject = 'Bienvenido a la tienda oficial de Snowdin!';
    const emailText = 'Hola, gracias por unirte a la comunidad del deporte de nieve';
    const emailAttachments = [];
    const attachmentsPath = '';

    if(attachmentsPath) {
        emailAttachments.push({path: attachmentsPath});
    }

    const info = await sendMail({
        to: emailAccount,
        subject: emailSubject,
        text: emailText,
        attachments: emailAttachments
    })
    console.log(info);
}

module.exports = main;