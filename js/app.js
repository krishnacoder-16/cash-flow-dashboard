//  App State
let totalSalary = 0;
let expenses = [];

//  DOM Elements 
const salaryInput = document.getElementById("salaryInput");
const setSalaryBtn = document.getElementById("setSalaryBtn");

const expenseNameInput = document.getElementById("expenseNameInput");
const expenseAmountInput = document.getElementById("expenseAmountInput");
const addExpenseBtn = document.getElementById("addExpenseBtn");

//  Event Listeners 
setSalaryBtn.addEventListener("click", handleSetSalary);
addExpenseBtn.addEventListener("click", handleAddExpense);

initApp();

function initApp() {
  // Load data from localStorage
  totalSalary = getSalaryFromStorage();
  expenses = getExpensesFromStorage();

  // Restore UI
  updateSalaryUI(totalSalary);
  renderExpenseList(expenses);
  updateBalance();
  updateExpenseChart(totalSalary, expenses);
}

// Handle salary setting
function handleSetSalary() {
  const salaryValue = Number(salaryInput.value);

  if (salaryValue <= 0) {
    alert("Please enter a valid salary amount");
    return;
  }

  totalSalary = salaryValue;

  // Save to storage
  saveSalaryToStorage(totalSalary);

  updateSalaryUI(totalSalary);
  updateBalance();
  updateExpenseChart(totalSalary, expenses);

}

// Handle adding expense
function handleAddExpense() {
  const name = expenseNameInput.value.trim();
  const amount = Number(expenseAmountInput.value);

  if (name === "" || amount <= 0) {
    alert("Please enter valid expense details");
    return;
  }

  const category = detectCategory(name);
  expenses.push({
    name,
    amount,
    category
  });


  // Save to storage
  saveExpensesToStorage(expenses);

  renderExpenseList(expenses);
  updateBalance();

  expenseNameInput.value = "";
  expenseAmountInput.value = "";
}

// Update balance using calculation module
function updateBalance() {
  const totalExpenses = calculateTotalExpenses(expenses);
  const balance = totalSalary - totalExpenses;

  updateTotalExpensesUI(totalExpenses);
  updateBalanceUI(balance);
  updateBudgetAlert(totalSalary, balance);
}


// Handle deleting expense
function deleteExpense(index) {
    
  // Remove expense from array
  expenses.splice(index, 1);

  // Save updated expenses
  saveExpensesToStorage(expenses);

  // Update UI
  renderExpenseList(expenses);
  updateBalance();
  updateExpenseChart(totalSalary, expenses);
}

