# Asynchronous Timer

## Summary

Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
The user can specify an unlimited number of alarms using command line arguments.

## Example Usage :

`node timer1.js 10 2 5 15 9`

This will make it beep at:

- 3 seconds
- 5 seconds
- 9 seconds
- 10 seconds
- 15 seconds

`process.stdout.write('\x07');`

## Instruction
 
Confirm that our script can handle some common edge cases. 
For this app, we can think of at least these three:
 
1. No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
2. An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
3. An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.