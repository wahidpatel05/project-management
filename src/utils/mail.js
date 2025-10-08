import Mailgen from "mailgen";
import nodemailer from "nodemailer"


const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://taskmanagerlink.com",
    },
  });

  if (!options.mailGenContent) {
    throw new Error("Missing mailGenContent for email generation");
  }

  const emailTextual = mailGenerator.generatePlaintext(options.mailGenContent);
  const emailHtml = mailGenerator.generate(options.mailGenContent);

  // ✅ Create and assign transporter
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  try {
    const info = await transporter.sendMail(mail);
    console.log("✅ Email sent successfully:", info.messageId);
  } catch (error) {
    console.error(
      "❌ Email service failed. Check your MAILTRAP credentials or SMTP config."
    );
    console.error("Error:", error);
  }
};


const emailVerificationMailgenContent = (username,verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our App! we're are excited to have you onboard.",
            action: {
                instructions: "To verify your email please click on the following button.",
                button: {
                    color: "#22BC66",
                    text: "Verify your email",
                    link: verificationUrl
                }

            },
            outro: "Need help or have questions? Just reply to this email, we would love to help."
        }

    }
}


const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: "We got a request to reset a password of your account.",
            action: {
                instructions: "To reset your password please click on the following button.",
                button: {
                    color: "#05365aff",
                    text: "Reset your password",
                    link: passwordResetUrl
                }

            },
            outro: "If this wasnt requested by you contact us!"
        }

    }
}

export {emailVerificationMailgenContent,
    forgotPasswordMailgenContent,
    sendEmail
}