const args = process.argv.slice(2);

const setTimer = (time) => {
  // checks if time is not defined (undefined) or evaluates to a falsy value.
  if (!time || isNaN(time) || time<0 ) {
    // return statement is used to exit the current function early and return to the caller without returning any value.
    return;
  }

  setTimeout(() => {
    process.stdout.write('\x07'); // Beep sound
    console.log(`Timer done for ${time} seconds`);
  }, time * 1000);
  };

  for (const arg of args) {
    setTimer(Number(arg));
};



