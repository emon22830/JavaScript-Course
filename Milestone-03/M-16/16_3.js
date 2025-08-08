const address = 'Andorkilla';
const part = address.slice(2,5);
console.log(part);


const sentence = 'I am a good and hardworking person';
console.log(sentence.split(' '));
console.log(sentence.split('a'))


const friendsStr = "EMON, EVAN, MARIA";
const friends = friendsStr.split(',')
console.log(friends)

const realSiblings = ['EMON', 'EVAN', 'MARIA'];
console.log(realSiblings.join('|'));


const fistName = 'MD'
const lastName = 'EMON'

const fullName = fistName.concat(' ').concat(lastName)
console.log(fullName)

console.log(lastName.includes('d'));