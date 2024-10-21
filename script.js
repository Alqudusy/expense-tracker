class ExpenseApp {
    constructor() {
        this.init();
        this.updateProfileElements();
    }

    init() {
        const newExpenseButton = document.querySelector('#new-expense');
        const newExpenseButton2 = document.querySelector('.add-new-expense-btn');
        const closeExpenseBtn = document.querySelector('#close-expense-btn');
        const newTripButton = document.querySelector('#new-trip');
        const newTripButton2 = document.querySelector('.add-new-trip-btn');
        const closeTripFormBtn = document.querySelector('#close-trip-form');
        const newIncomeBtn = document.querySelector('#new-income');
        const newIncomeBtn2 = document.querySelector('.add-new-income-btn');
        const closeNewIncomeBtn = document.querySelector('#close-income-form');
        const homeButton = document.querySelector('.home-btn');
        const expensesButton = document.querySelector('.expenses-btn');
        const tripsButton = document.querySelector('.trips-btn');
        const toggleBtn = document.querySelector('#toggle-btn');
        const settingBtn = document.querySelector('.settings-btn');
        const incomesBtn = document.querySelector('.incomes-btn');
        toggleBtn.addEventListener('click', () => {
            const toggle = document.querySelector('.toggle');
            const toggleElement = document.querySelector('#theme-toggler');
            if (!toggleElement.checked) {
                toggle.style.transform = 'translateX(1.8rem)';
            }
            if (toggleElement.checked) {
                toggle.style.transform = 'translateX(0)';
            }
        });
        newExpenseButton.addEventListener('click', () => {
            this.showNewExpenseForm();
        });
        newExpenseButton2.addEventListener('click', () => {
            this.showNewExpenseForm();
        });
        closeExpenseBtn.addEventListener('click', () => {
            this.closeExpenseForm();
        });
        newTripButton.addEventListener('click', () => {
            this.showNewTripForm();
        });
        newTripButton2.addEventListener('click', () => {
            this.showNewTripForm();
        });
        closeTripFormBtn.addEventListener('click', () => {
            this.closeTripForm();
        });
        newIncomeBtn.addEventListener('click', () => {
            this.showIncomeForm();
        });
        newIncomeBtn2.addEventListener('click', () => {
            this.showIncomeForm();
        });
        closeNewIncomeBtn.addEventListener('click', () => {
            this.closeIncomeForm();
        });
        homeButton.addEventListener('click', () => {
            this.toHome();
        });
        expensesButton.addEventListener('click', () => {
            this.showExpenses();
        });
        tripsButton.addEventListener('click', () => {
            this.showTrips();
        });
        settingBtn.addEventListener('click', () => {
            this.showSettings();
        });
        incomesBtn.addEventListener('click', () => {
            this.showIncomes();
        });
    }

    showNewExpenseForm() {
        this.closeIncomeForm();
        this.closeExpenses();
        this.closeTrips();
        this.closeSetting();
        this.closeIncomes();
        const expenseForm = document.querySelector('.expense-form');
        expenseForm.style.display = "flex";
    }  
    
    closeExpenseForm() {
        const expenseForm = document.querySelector('.expense-form');
        expenseForm.style.display = 'none';
    }

    showNewTripForm() {
        this.closeIncomeForm();
        this.closeExpenses();
        this.closeTrips();
        this.closeSetting();
        this.closeIncomes();
        const newTripForm = document.querySelector('.trip-form');
        newTripForm.style.display = "flex";
    }

    closeTripForm() {
        const newTripForm = document.querySelector('.trip-form');
        newTripForm.style.display = 'none';
    }

    showIncomeForm() {
        this.closeIncomeForm();
        this.closeExpenses();
        this.closeTrips();
        this.closeSetting();
        this.closeIncomes();
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
        }
        if (document.querySelector('.trip-form').style.display = 'flex') {
            this.closeTripForm();
        }
        if (document.querySelector('.expense-form').style.display = 'flex') {
            this.closeExpenseForm();
        }
        if (document.querySelector('#expenses-div').style.display = 'block') {
            this.closeExpenses();
        }
        if (document.querySelector('#trips-div').style.display = 'block') {
            this.closeTrips();
        }
        if (document.querySelector('#setting-div').style.display = 'block') {
            this.closeSetting();
        }
        if (document.querySelector('#incomes-div').style.display = 'block') {
            this.closeIncomes();
        }
    }

    showExpenses() {
        this.closeIncomeForm();
        this.closeTripForm();
        this.closeExpenses();
        this.closeTrips();
        this.closeSetting();
        this.closeIncomes();
        const expensesTable = document.querySelector('#expenses-div');
        expensesTable.style.display = 'block';
    }

    closeExpenses() {
        const expensesTable = document.querySelector('#expenses-div');
        expensesTable.style.display = 'none';
    }

    showTrips() {
        this.closeIncomeForm();
        this.closeExpenseForm();
        this.closeExpenses();
        this.closeTripForm();
        this.closeSetting();
        this.closeIncomes();
        const tripsTable = document.querySelector('#trips-div');
        tripsTable.style.display = 'block';
    }

    closeTrips() {
        const tripsTable = document.querySelector('#trips-div');
        tripsTable.style.display = 'none';
    }
    showSettings() {
        this.closeIncomeForm();
        this.closeTripForm();
        this.closeExpenses();
        this.closeTrips();
        this.closeSetting();
        this.closeIncomes();
        const settingsDiv = document.querySelector('#setting-div');
        settingsDiv.style.display = 'flex';
    }
    closeSetting() {
        const settingsDiv = document.querySelector('#setting-div');
        settingsDiv.style.display = 'none';
    }
    showIncomes() {
        this.closeIncomeForm()
        this.closeTripForm();
        this.closeExpenses();
        this.closeTrips();
        this.closeSetting();
        this.closeIncomes();
        const incomesDiv = document.querySelector('#incomes-div');
        incomesDiv.style.display = 'block';
    }
    closeIncomes() {
        const incomesDiv = document.querySelector('#incomes-div');
        incomesDiv.style.display = 'none';
    }
    updateProfileElements() {
        const userName = document.querySelector('#profile-name');
        const userBalance = document.querySelector('.user-balance');
        const userInfo = JSON.parse(localStorage.getItem('user_profile'));
        userName.innerText = userInfo[0].name;
        userBalance.innerText = `Balance: ${userInfo[0].balance}`;
    }
}
class User {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
}
class InitializeAndAuthorize {
    constructor(firstVisit, userInfo) {
        this.firstVisit = localStorage.getItem('first_visit');
        this.userInfo = localStorage.getItem('user_profile');
        this.authorize();
    }
    authorize() {
        if (!this.firstVisit && !this.userInfo) {
            localStorage.setItem('first_visit', 'true');
            this.register();
        } else {
            new ExpenseApp();
        }
    }
    register() {
        const name = prompt('Please enter your name');
        const balance = prompt('Please enter your current balance');
        if ((name !== null && balance !== null) && (name !== "" && balance !== "")) {
            const newUser = new User(name, balance);
            const userProfile = [];
            userProfile.push(newUser);
            localStorage.setItem('user_profile', JSON.stringify(userProfile));
            new ExpenseApp();
            this.updateProfileElements();
        } else {
            this.register();
        }
    }
    updateProfileElements() {
        const userName = document.querySelector('#profile-name');
        const userBalance = document.querySelector('.user-balance');
        const userInfo = JSON.parse(localStorage.getItem('user_profile'));
        userName.innerText = userInfo[0].name;
        userBalance.innerText = `Balance: ${userInfo[0].balance}`;
    }
}
new InitializeAndAuthorize();