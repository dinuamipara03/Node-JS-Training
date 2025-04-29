// Demo Task 3: Counter with Start, Stop, and Reset
// Scenario: You need to create a counter that can start counting, stop counting, and reset the count. The counter should remain private and not be accessible directly from outside (using closures).

// Requirements:
// Create a function createCounter() that returns three functions:
// start(): Starts counting every second and logs the count.
// stop(): Stops the counter from increasing.
// reset(): Resets the counter back to 0.
// The counter value should be private (use a closure).
// Use arrow functions where possible.

function createCounter() {
  let count = 0;
  let interval;

  const start = () => {
    if (interval) return;
    interval = setInterval(() => {
      console.log(`Count: ${count}`);
      count++;
    }, 1000);
  };

  const stop = () => {
    clearInterval(interval);
    interval = null;
  };

  const reset = () => {
    count = 0;
  };

  return { start, stop, reset };
}

const counter = createCounter();

const startCounter = () => {
  console.log("Counter started!");
  counter.start();
};

const stopCounter = () => {
  console.log("Counter stopped!");
  counter.stop();
};

const resetCounter = () => {
  console.log("Counter reset!");
  counter.reset();
};

startCounter();
setTimeout(stopCounter, 5000);
setTimeout(resetCounter, 10000);
