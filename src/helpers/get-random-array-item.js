function getRandomArrayItem (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = getRandomArrayItem;



const cred1 = {
  email: 'sadjfkas',
  pass: 'asdkfsadkf'
}

const cred2 = {
  email: 'sadjfkas',
  pass: 'asdkfsadkf'
}

const cred3 = {
  email: 'sadjfkas',
  pass: 'asdkfsadkf'
}

const arr = [cred1, cred2, cred3]


// например
const name = 'John'

// вместо
console.log('Hello ' + name);
// можно
console.log(`Hello ${name}`);