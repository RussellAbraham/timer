// get the arguments passed in from the command line
const args = process.argv.slice(2);

// Edge case number 1 - no numbers provided
if (args.length === 0) {
  console.log('No numbers provided');
  process.exit(0);
}

// loop over the arguments
for (let arg of args) {
  // conver the arguments to a number
  const time = Number(arg);
  // 2 edge cases here
  // check if its a positive number
  if (!isNaN(time) && time > 0) {
    setTimeout(()=>{
      process.stdout.write('\x07');
    }, time * 1000);
  }
};