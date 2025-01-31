const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);

const waitMessage = (percent) =>{
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${percent}%`);
} 

const timerFinished = () => {
  clearInterval(interval);
  waitMessage(100);
  console.log("\ndone");
};

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;
const incTime = () => {
  currentTime += waitInterval;
  const percent = Math.floor((currentTime / waitTime) * 100);
  waitMessage(percent);
};

const interval = setInterval(incTime, waitInterval);
