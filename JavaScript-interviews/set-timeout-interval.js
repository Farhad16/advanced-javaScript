console.log("1st log");
console.log("2nd log");
console.log("3rd log");
setTimeout(() => {
    console.log("Heh I was waiting for 3 minutes");
}, 3000);

console.log("4th log");

setInterval(() => {
    console.log("i will notify you every 1 minute.");
}, 1000)