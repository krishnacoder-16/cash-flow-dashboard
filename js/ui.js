// Update salary display
function updateSalaryUI(salary) {
  document.getElementById("salaryDisplay").textContent = salary;
}

// Update balance display
function updateBalanceUI(balance) {
  document.getElementById("balanceDisplay").textContent = balance;
}

function renderExpenseList(expenses) {
  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";

  expenses.forEach((expense, index) => {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = `${expense.name} - ₹${expense.amount}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.style.marginLeft = "10px";

    // Attach index to button
    deleteBtn.addEventListener("click", () => {
      deleteExpense(index);
    });

    li.appendChild(text);
    li.appendChild(deleteBtn);
    expenseList.appendChild(li);
  });
}
