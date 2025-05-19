import { nodemail } from "../config/nodemail";

import { SentMessageInfo } from "nodemailer";

interface EmailOptions {
  to: string | string[];

  subject: string;

  html?: string;

  text?: string;
}

export const mailer = async (
  options: EmailOptions
): Promise<SentMessageInfo> => {
  console.log(options);

  try {
    const info = await nodemail.sendMail({
      from: process.env.MAIL_FROM_ADDRESS,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    console.log("Message sent:", info.messageId);

    return info;
  } catch (error) {
    console.error("Error sending email:", error);

    throw error;
  }
};
