const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const jwt = require("jsonwebtoken");

const id = 1;
const secret = process.env.SECRET_MAIL;
const payload = { sub: "okkkk" }; // recup data from user where email = email saisie sur la demande
const token = jwt.sign(payload, secret, { expiresIn: "1h" });

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "Oauth2",
        user: "nlopes93600@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accesssToken: accessToken,
      },
    });

    const mailOptions = {
      from: "NICOLAS <nlopes93600@gmail.com>",
      to: "lopes_nico@yahoo.fr", // put the email of user depuis le payload//
      subject: "password test reset",
      text: "Try to reset your password",
      html: `<h1>Try to reset your password</h1> ${token} click here : http://localhost:3000/resetpassword?token=${token}&id=${id}`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = {
  sendMail,
};