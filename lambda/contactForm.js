/* eslint-disable no-underscore-dangle */
const sgMail = require('@sendgrid/mail');
const Sentry = require('@sentry/serverless');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function sendGridEmail(event, context, callback) {
  const clientIP = (event.headers || {})['x-nf-client-connection-ip'];
  const { name, email, phone, message } = JSON.parse(event.body);

  const html = `<div><strong>Ny besked via Nørrebro CK's kontaktformular</strong><p>Navn: ${name}</p><p>Mail: ${email}</p><p>Telefon: ${phone}</p><p>Besked: ${message}</p><p>Afsenders IP addresse: ${clientIP}</p></div>`;

  const msg = {
    to: ['torefolkerman@gmail.com', 'tobiasjohansorensen@gmail.com'],
    from: 'noreply@norrebrock.dk',
    subject: 'Nørrebro cykleklub - Kontakt',
    html,
  };

  await sgMail
    .send(msg)
    .then(() => {
      callback(null, {
        statusCode: 200,
      });
    })
    .catch(error => {
      callback(error);
    });
};
