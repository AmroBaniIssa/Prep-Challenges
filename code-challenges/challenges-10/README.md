## Hacker Rank

Thursdays code challenges aims to add some points to your hacker rank account

please create your own account and try to solve as much as you can even if it was not an assignment, since
a lot of employers take hacker rank profile into consideration

answer.
let candles = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
function birthdayCakeCandles(candles) {
  // Write your code here
  let y = 0;
  let x = 0;
  for (let i = 0; i < candles.length; i++) {
    if (x != candles[i] && x < candles[i]) {
      y = 0;
      console.log(y);
      console.log(x);
    }
    if (x <= candles[i]) {
      y += 1;
      x = candles[i];
      console.log("..." + y);
      console.log("..." + x);
    }
  }
  return y;
}
console.log(birthdayCakeCandles(candles));

### .nnb file

Basically it is a notebook where you can write MD and JS in the same time.

And Mainly to run codes that require so much time separately.

You need to install the following extensions:

- [Node.js Notebooks (REPL)](https://marketplace.visualstudio.com/items?itemName=donjayamanne.typescript-notebook)
- [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)
