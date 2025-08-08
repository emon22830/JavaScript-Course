const friends = ['EMON', 'EVAN'];
console.log(friends.includes('EMON'))
console.log(friends.includes('Maria'))

if(friends.includes("EVAN")){
    console.log(" You are my mother's son")
}
else{
    console.log("Who are you")
}
 
const age = 23;
console.log(friends.indexOf('EMON'));

console.log(Array.isArray(friends));
console.log(Array.isArray(age));