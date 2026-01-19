// Calculate total expenses
function calculateTotalExpenses(expenses) {
  let total = 0;

  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }

  return total;
}

// Calculate remaining balance
function calculateRemainingBalance(salary, expenses) {
  const totalExpenses = calculateTotalExpenses(expenses);
  return salary - totalExpenses;
}
