const CURRENCY_SYMBOLS = {
  INR: "₹",
  USD: "$",
  EUR: "€"
};

let currentCurrency = "INR";
let exchangeRate = 1;

// Fetch exchange rate using Frankfurter API
async function fetchExchangeRate(toCurrency) {
  if (toCurrency === "INR") {
    exchangeRate = 1;
    return;
  }

  try {
    const response = await fetch(
      `https://api.frankfurter.app/latest?from=INR&to=${toCurrency}`
    );
    const data = await response.json();
    exchangeRate = data.rates[toCurrency] || 1;
  } catch (error) {
  console.error("Currency API failed:", error);
  exchangeRate = 1;
}

}
