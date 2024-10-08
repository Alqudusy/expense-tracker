class ExpenseApp {
    constructor() {
        this.init();
    }

    init() {
        const newExpenseButton = document.querySelector('#new-expense');
        const closeExpenseBtn = document.querySelector('#close-expense-btn');
        const newTripButton = document.querySelector('#new-trip');
        const closeTripFormBtn = document.querySelector('#close-trip-form');
        const newIncomeBtn = document.querySelector('#new-income');
        const closeNewIncomeBtn = document.querySelector('#close-income-form');
        const homeBotton = document.querySelector('.home-btn');
        newExpenseButton.addEventListener('click', () => {
            this.showNewExpenseForm();
        });
        closeExpenseBtn.addEventListener('click', () => {
            this.closeExpenseForm();
        });
        newTripButton.addEventListener('click', () => {
            this.showNewTripForm();
        });
        closeTripFormBtn.addEventListener('click', () => {
            this.closeTripForm();
        });
        newIncomeBtn.addEventListener('click', () => {
            this.showIncomeForm();
        });
        closeNewIncomeBtn.addEventListener('click', () => {
            this.closeIncomeForm();
        });
        homeBotton.addEventListener('click', () => {
            this.toHome();
        });
    }

    showNewExpenseForm() {
        const expenseForm = document.querySelector('.expense-form');
        expenseForm.style.display = "flex";
    }  
    
    closeExpenseForm() {
        const expenseForm = document.querySelector('.expense-form');
        expenseForm.style.display = 'none';
    }

    showNewTripForm() {
        const newTripForm = document.querySelector('.trip-form');
        newTripForm.style.display = "flex";
    }

    closeTripForm() {
        const newTripForm = document.querySelector('.trip-form');
        newTripForm.style.display = 'none';
    }

    showIncomeForm() {
        const newIncomeForm = document.querySelector('.income-form');
        newIncomeForm.style.display = 'flex';
    }

    closeIncomeForm() {
        const newIncomeForm = document.querySelector('.income-form');
        newIncomeForm.style.display = 'none';
    }

    toHome() {
        if (document.querySelector('.income-form').style.display = 'flex') {
            this.closeIncomeForm();
        } else if (document.querySelector('.trip-form').style.display = 'flex') {
            this.closeTripForm();
        } else if (document.querySelector('.expense-form').style.display = 'flex') {
            this.closeExpenseForm();
        } else {
            return;
        }
    }
}
new ExpenseApp();