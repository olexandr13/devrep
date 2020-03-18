const environments = {
  EN: 'http://master-test.net/en/auth/registration',
  RU: 'http://master-test.net/ru/auth/registration',
}
const lang = process.env.LANGUAGE || 'EN';
module.exports = environments[lang];
