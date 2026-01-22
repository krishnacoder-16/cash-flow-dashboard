let expenseChart = null;

// Update salary display
function updateSalaryUI(salary) {
  const symbol = CURRENCY_SYMBOLS[currentCurrency];
  const value = (salary * exchangeRate).toFixed(2);
  document.getElementById("salaryDisplay").textContent = `${symbol}${value}`;
}

// Update balance display
function updateBalanceUI(balance) {
  const symbol = CURRENCY_SYMBOLS[currentCurrency];
  const value = (balance * exchangeRate).toFixed(2);
  document.getElementById("balanceDisplay").textContent = `${symbol}${value}`;
}

function updateTotalExpensesUI(totalExpenses) {
  const symbol = CURRENCY_SYMBOLS[currentCurrency];
  const value = (totalExpenses * exchangeRate).toFixed(2);
  document.getElementById("totalExpensesDisplay").textContent = `${symbol}${value}`;
}

function renderExpenseList(expenses) {
  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";

  expenses.forEach((expense, index) => {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = `${expense.name} - ${CURRENCY_SYMBOLS[currentCurrency]}${(expense.amount * exchangeRate).toFixed(2)}`;

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
function generatePDFReport(salary, expenses) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 20;

  // Currency setup
  const symbol = currentCurrency === "INR" ? "Rs. " : CURRENCY_SYMBOLS[currentCurrency];

  const rate = exchangeRate;

  // Convert values for display
  const convertedSalary = (salary * rate).toFixed(2);
  const totalExpenses = calculateTotalExpenses(expenses);
  const convertedTotalExpenses = (totalExpenses * rate).toFixed(2);
  const remainingBalance = salary - totalExpenses;
  const convertedRemaining = (remainingBalance * rate).toFixed(2);

  // Title
  doc.setFontSize(16);
  doc.text("Cash Flow Report", 20, y);
  y += 12;

  // Summary
  doc.setFontSize(12);
  doc.text(`Salary: ${symbol}${convertedSalary}`, 20, y);
  y += 8;

  doc.text(`Total Expenses: ${symbol}${convertedTotalExpenses}`, 20, y);
  y += 8;

  doc.text(`Remaining Balance: ${symbol}${convertedRemaining}`, 20, y);
  y += 12;

  // Expense List
  doc.text("Expenses:", 20, y);
  y += 8;

  expenses.forEach((expense, index) => {
    const convertedAmount = (expense.amount * rate).toFixed(2);
    doc.text(
      `${index + 1}. ${expense.name} - ${symbol}${convertedAmount}`,
      20,
      y
    );
    y += 7;
  });

  // Footer
  y += 10;
  const date = new Date().toLocaleDateString();
  doc.text(`Generated on: ${date}`, 20, y);

  // Save PDF
  doc.save("cash-flow-report.pdf");
}
