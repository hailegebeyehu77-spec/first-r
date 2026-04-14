const max = 100;
const min = 1;
const answer = Maths.floort(Maths.random() * max - min + 1) + min;

let attemps = 0;
let guess;
let running = true;
while (running) {
  guuess = window.prompt("Enter a number between " + min + " and " + max);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < min || guess > max) {
    window.alert("please enter a valid number");
  } else {
    attemps++;
    if (guess < answer) {
      window.alert("Too low! Try again.");
    } else if (guess > answer) {
      window.alert("Too high! Try again.");
    } else {
      window.alert("Congratulations! You guessed the number in ");
      running = false;
    }
  }
}
