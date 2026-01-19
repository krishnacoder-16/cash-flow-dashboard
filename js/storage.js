// Save salary to localStorage
function saveSalaryToStorage(salary) {
  localStorage.setItem("salary", JSON.stringify(salary));
}

// Get salary from localStorage
function getSalaryFromStorage() {
  const salary = localStorage.getItem("salary");
  return salary ? JSON.parse(salary) : 0;
}

// Save expenses array to localStorage
function saveExpensesToStorage(expenses) {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Get expenses array from localStorage
function getExpensesFromStorage() {
  const expenses = localStorage.getItem("expenses");
  return expenses ? JSON.parse(expenses) : [];
}

// Clear all stored data (optional utility)
function clearStorage() {
  localStorage.removeItem("salary");
  localStorage.removeItem("expenses");
}
