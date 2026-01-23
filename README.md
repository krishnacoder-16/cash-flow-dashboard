\# 💰 Cash Flow Dashboard



\## 📸 Project Preview



\### Dashboard

!\[Dashboard](assets/dashboard.png)



\### PDF Report

!\[PDF Report](assets/pdf-report.png)





A \*\*Salary \& Expense Tracker Dashboard\*\* built as part of \*\*Weekly Assignment 2\*\* during the \*\*Prodesk IT Internship\*\*.



This project focuses on core frontend fundamentals such as \*\*JavaScript logic\*\*, \*\*DOM manipulation\*\*, \*\*data persistence\*\*, and \*\*real‑world feature design\*\*.



---



\## 🚀 Features



\### ✅ Level 1 – Core Functionality



\* Add total salary

\* Add expenses with name and amount

\* Automatic remaining balance calculation

\* Input validation for empty or negative values



---



\### ✅ Level 2 – Intermediate Features



\* \*\*Persistent data storage\*\* using `localStorage`

\* Expenses remain after page refresh

\* Delete expense functionality

\* \*\*Category‑based expense visualization\*\* using Chart.js



&nbsp; \* Categories detected automatically from expense names



---



\### ✅ Level 3 – Advanced Features



\* \*\*Currency Converter\*\* (INR / USD / EUR)



&nbsp; \* Uses free Frankfurter API

&nbsp; \* Base data stored in INR, conversion applied only for display

\* \*\*Budget Alert\*\*



&nbsp; \* Warning shown when remaining balance drops below 10% of salary

\* \*\*PDF Report Export\*\*



&nbsp; \* Downloadable financial report using jsPDF

&nbsp; \* Currency‑aware values based on selected currency



---



\## 🧠 Key Design Decisions



\* All financial data is stored internally in \*\*INR\*\*

\* Currency conversion affects only UI and PDF display

\* Expense categories are \*\*auto‑detected\*\* (no dropdown for user)

\* Chart used for live dashboard visualization only

\* PDF report focuses on clean numeric summary (no chart)



---



\## 📂 Project Structure



```

cash-flow-dashboard/

│

├── index.html

├── css/

│   └── style.css

│

├── js/

│   ├── app.js          # Main controller \& event handling

│   ├── ui.js           # UI updates, chart, PDF export

│   ├── calculations.js # Salary \& expense calculations

│   ├── storage.js      # localStorage utilities

│   ├── category.js     # Automatic category detection

│   └── currency.js     # Currency conversion logic

│

├── README.md

└── Prompts.md

```



---



\## 🛠️ Technologies Used



\* \*\*HTML5\*\*

\* \*\*Modern CSS\*\* (CSS variables, responsive layout)

\* \*\*JavaScript (ES6+)\*\*

\* \*\*Chart.js\*\* (data visualization)

\* \*\*jsPDF\*\* (PDF generation)

\* \*\*Frankfurter API\*\* (currency conversion)



---



\## 🧪 How to Run the Project



1\. Clone the repository

2\. Open `index.html` in a browser

3\. Enter salary and expenses

4\. Switch currencies or download PDF report



(No backend or build tools required)



---



\## 🤖 AI Assistance Disclaimer



AI tools were used \*\*only for guidance and explanations\*\*, such as:



\* Understanding requirements

\* Planning file structure

\* Debugging runtime errors



All implementation and decisions were made with understanding.



See `Prompts.md` for details.



---



\## 👨‍💻 Author



\*\*Krishna Kumar\*\*

Intern – Prodesk IT



---



✅ \*This project demonstrates practical frontend engineering skills expected in real‑world dashboards.\*



