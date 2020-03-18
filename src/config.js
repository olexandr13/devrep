// possible values: 'EN', 'RU'
const language = 'RU';

const URLs = {
  EN: 'http://master-test.net/en/auth/registration',
  RU: 'http://master-test.net/ru/auth/registration',
}

const URL = URLs[language];

module.exports = URL;
