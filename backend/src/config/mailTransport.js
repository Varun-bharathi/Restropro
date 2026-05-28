const {CONFIG} = require("./index")
const nodemailer = require("nodemailer")

exports.mailTransport = async (options) => {
    try {
        if (!CONFIG.SMTP_HOST || !CONFIG.SMTP_EMAIL) {
            console.log("\n==================================================");
            console.log("📨 [SMTP MOCK LOG] Email would be sent to:", options.to);
            console.log("Subject:", options.subject);
            console.log("HTML Content:", options.html);
            console.log("==================================================\n");
            return;
        }

        const transporter = nodemailer.createTransport({
            host: CONFIG.SMTP_HOST,
            port: CONFIG.SMTP_PORT,
            // secure: true, // use true, for https emails and 465 port
            auth: {
                user: CONFIG.SMTP_EMAIL,
                pass: CONFIG.SMTP_PASSWORD,
            },
        })
    
        await transporter.sendMail({
            from: CONFIG.SMTP_EMAIL,
            to: options.to,
            subject: options.subject,
            html: options.html,
        });
    } catch (error) {
        throw error;
    }
}