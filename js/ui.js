let expenseChart = null;

// Update salary display
function updateSalaryUI(salary) {
  document.getElementById("salaryDisplay").textContent = salary;
}

// Update balance display
function updateBalanceUI(balance) {
  document.getElementById("balanceDisplay").textContent = balance;
}

function updateTotalExpensesUI(totalExpenses) {
  document.getElementById("totalExpensesDisplay").textContent = totalExpenses;
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
  const categoryTotals = {};
  let totalExpenses = 0;

  // Group expenses by category
  expenses.forEach((expense) => {
    const category = expense.category || "Other";

    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    categoryTotals[category] += expense.amount;
    totalExpenses += expense.amount;
  });

  const remainingBalance = salary - totalExpenses;

  // Prepare chart data
  const labels = ["Remaining Balance", ...Object.keys(categoryTotals)];
  const data = [remainingBalance, ...Object.values(categoryTotals)];

  const ctx = document.getElementById("expenseChart").getContext("2d");

  // Destroy old chart
  if (expenseChart) {
    expenseChart.destroy();
  }

  expenseChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          data: data
        }
      ]
    },
    options: {
      responsive: true
    }
  });
}

function updateBudgetAlert(salary, balance) {
  const warningEl = document.getElementById("budgetWarning");
  const balanceEl = document.getElementById("balanceDisplay");

  const threshold = salary * 0.1;

  if (salary > 0 && balance < threshold) {
    warningEl.style.display = "block";
    warningEl.style.color = "#ef4444";
    balanceEl.style.color = "#ef4444";
  } else {
    warningEl.style.display = "none";
    balanceEl.style.color = "#16a34a";
  }
}

