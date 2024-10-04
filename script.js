class ExpenseApp {
    constructor() {
        this.init();
    }

    init() {
        const newExpenseButton = document.querySelector('#new-expense');
        newExpenseButton.addEventListener('click', () => {
            this.showNewExpenseForm();
        });
    }

    renderEventListener1() {
        this.showNewExpenseForm()
    }

    showNewExpenseForm() {
    }    
}
new ExpenseApp();