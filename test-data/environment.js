const environments = {
  EN: 'http://master-test.net/en',
  RU: 'http://master-test.net/ru',
}

module.exports = environments[process.env.LANGUAGE] || 'http://master-test.net/en';

