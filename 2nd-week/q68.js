// Special number using methods.

function factorial(n) {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

function specialNumber(n) {
  let sum = 0;
  let temp = n;

  while (temp > 0) {
    let digit = temp % 10;
    sum += factorial(digit);

    temp = Math.floor(temp / 10);
  }

  return sum === n;
}

let num = 145;

if (specialNumber(num)) console.log("Special Number");
else console.log("Not Special Number");