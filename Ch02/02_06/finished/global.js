const waitTime = 5000;
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => console.log("done");
setTimeout(timerFinished, waitTime);
