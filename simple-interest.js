/*
  Simple Interest Calculator
  Author:
  Date:
*/

// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
  /*
    Formula for Simple Interest:
    I = P * R * T
    where:
    P = principal amount
    R = rate of interest per year in decimal form (e.g., 5% = 0.05)
    T = time period in years
  */
  const interest = principal * (rate / 100) * time;
  return interest;
}

// Example usage:
const principalAmount = 1000; // e.g., $1000
const interestRate = 5; // e.g., 5%
const timePeriod = 2; // e.g., 2 years

const interest = calculateSimpleInterest(principalAmount, interestRate, timePeriod);
const totalAmount = principalAmount + interest;

console.log("Principal Amount: $" + principalAmount);
console.log("Interest Rate: " + interestRate + "%");
console.log("Time Period: " + timePeriod + " years");
console.log("Simple Interest: $" + interest);
console.log("Total Amount: $" + totalAmount);
