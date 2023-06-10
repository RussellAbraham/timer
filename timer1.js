/* Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
 The user can specify an unlimited number of alarms using command line arguments

 Example usage:
 node timer1.js 10 2 5 15 9

 This will make it beep at:
 
 3 seconds
 5 seconds
 9 seconds
 10 seconds
 15 seconds
 
 process.stdout.write('\x07');
 Instruction
 Confirm that our script can handle some common edge cases.
 
 For this app, we can think of at least these three:
 
 No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
 An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
 An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number. 
 */

// get the arguments passed in from the command line
const args = process.argv.slice(2);

// Edge case number 1 - no numbers provided
if (args.length === 0) {
  console.log('No numbers provided');
  process.exit(0);
}

// function to check for the next 2 edgecases
function validate(){

  // return an array to loop over can call setTimeout on
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
