const css = require('./css');

const header = title => `
  <head>
    <title>${title}</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      ${css()}
    </style>
  </head>
`;

const render = (date, username, isBirthday, accountCreatedDate) => `
  <html>
    ${header(username)}
    <body>
      <p>${isBirthday} <b>${username}</b>${
  isBirthday !== '' ? ' ' + isBirthday : ''
}, your drupal.org birthday is, <b>${date}</b>, and your account was created on, <b>${accountCreatedDate}</b>.</p>
    </body>
  </html>
`;

const homepage = () => `
  <html>
    <title>Drupal Birthday . Fun</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      ${css()}
    </style>
    <body>
      <p>https://drupalbirthday.fun/{your drupal.org username}</p>
    </body>
  </html>
`;

const error = username => `
  <html>
    <title>Drupal Birthday . Fun</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      ${css()}
    </style>
    <body>
      <p>Something went wrong when looking up, <b>${username}</b>. Maybe try again?</p>
    </body>
  </html>
`;

module.exports = { render, homepage, error };
