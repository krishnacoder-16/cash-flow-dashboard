let expenseChart = null;

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

// Update balance calculation and UI

function updateExpenseChart(salary, expenses) {
  const totalExpenses = calculateTotalExpenses(expenses);
  const remainingBalance = salary - totalExpenses;

  const ctx = document.getElementById("expenseChart").getContext("2d");

  // Destroy old chart before creating new one
  if (expenseChart) {
    expenseChart.destroy();
  }

  expenseChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Remaining Balance", "Total Expenses"],
      datasets: [
        {
          data: [remainingBalance, totalExpenses],
          backgroundColor: ["#2ecc71", "#e74c3c"]
        }
      ]
    },
    options: {
      responsive: true
    }
  });
}
