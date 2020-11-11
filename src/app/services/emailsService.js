import nodemailer from 'nodemailer';
import { environment } from '../../env';

export default class EmailsService {

    header = environment.NODEMAILER_CONFIG.auth.user;
    transporter = nodemailer.createTransport(environment.NODEMAILER_CONFIG);

    constructor() {}

    sendEmail(to, cc, subject, plainText, htmlBody) {

        let mailOptions = {
            from: '"TodoList - Ne pas répondre" <'+ this.header +'>',
            to,
            cc,
            subject,
            text: plainText,
            html: ''
        };

        mailOptions.html = `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html>
                <body style="font-family: sans-serif;">
                    <div class="es-wrapper-color">
                        <!--[if gte mso 9]>
                            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                                <v:fill type="tile" color="#f6f6f6"></v:fill>
                            </v:background>
                        <![endif]-->
                        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <td class="esd-email-paddings" valign="top">
                                        ${htmlBody}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </body>
            </html>
        `;

        return new Promise((resolve, reject) => {
            this.transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return reject(error);
                };
                return resolve(info);
            });
        });
    }

}