import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { activateEmailTemplate } from '../emails/activateEmailTemplate';

const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;

const oAuth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

export const sendEmail = (to, url, txt, subject) => {
  oAuth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  });
  const accessToken = oAuth2Client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken,
    },
  });
  const mailOptions = {
    from: SENDER_EMAIL_ADDRESS,
    to,
    subject: subject,
    // html: `<p>Please click on the link below to activate your account</p><a href=${url}>${url}</a>`,
    html: activateEmailTemplate(to, url),
  };
  smtpTransport.sendMail(mailOptions, (err, infos) => {
    if (err) return err;
    return infos;
  });
};