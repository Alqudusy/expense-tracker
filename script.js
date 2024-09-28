class ExpenseApp {
    constructor() {
        this.init();
    }

    init() {
        const newExpenseButton = document.querySelector('#new-expense');
        newExpenseButton.addEventListener('click', () => {
            this.showNewExpenseForm(); // Corrected spelling of "Expense"
        });
    }

    showNewExpenseForm() {
        const form = document.querySelector('#expense-form');
        form.style.display = 'block'; // Added quotes around 'flex' to make it a string
        alert("Form showed");
    }
}
new ExpenseApp();