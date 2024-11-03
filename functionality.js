class User {
    constructor(name, balance, currency) {
        this.name = name;
        this.balance = balance;
        this.currency = currency;
    }
}
class Trips {
    constructor(from, to, ammountSpent, dateOfDeparting, modeOfTransportation, paymentMethod, description) {
        this.from = from;
        this.to = to;
        this.ammountSpent = ammountSpent;
        this.dateOfDeparting = dateOfDeparting;
        this.modeOfTransportation = modeOfTransportation;
        this.paymentMethod = paymentMethod;
        this.Description = description;
    }
}
class Expense {
    constructor(subject, merchant, date, total, expenseType, paymentMethod, description) {
        this.subject = subject;
        this.merchant = merchant;
        this.date = date;
        this.total = total;
        this.expenseType = expenseType;
        this.paymentMethod = paymentMethod;
        this.description = description;
    }
}
class Income {
    constructor(source, date, total, paymentMethod, description) {
        this.source = source;
        this.date = date;
        this.total = total;
        this.paymentMethod = paymentMethod;
        this.description = description;
    }
}
class ExpenseApp {
    constructor() {
        this.newExpenseButton = document.querySelector('#new-expense');
        this.newExpenseButton2 = document.querySelector('.add-new-expense-btn');
        this.closeExpenseBtn = document.querySelector('#close-expense-btn');
        this.newTripButton = document.querySelector('#new-trip');
        this.newTripButton2 = document.querySelector('.add-new-trip-btn');
        this.closeTripFormBtn = document.querySelector('#close-trip-form');
        this.newIncomeBtn = document.querySelector('#new-income');
        this.newIncomeBtn2 = document.querySelector('.add-new-income-btn');
        this.closeNewIncomeBtn = document.querySelector('#close-income-form');
        this.homeButton = document.querySelector('.home-btn');
        this.expensesButton = document.querySelector('.expenses-btn');
        this.tripsButton = document.querySelector('.trips-btn');
        this.toggleBtn = document.querySelector('#toggle-btn');
        this.settingBtn = document.querySelector('.settings-btn');
        this.incomesBtn = document.querySelector('.incomes-btn');
        this.tripForm = document.querySelector('.new-trip-form');
        this.tripFrom = this.tripForm.querySelector('#from');
        this.tripTo = this.tripForm.querySelector('.to');
        this.dateOfDeparting = this.tripForm.querySelector('#date');
        this.totalAmountSpent = this.tripForm.querySelector('#total');
        this.modeOfTransportation = this.tripForm.querySelector('#expense-type');
        this.paymentMethod = this.tripForm.querySelector('#method');
        this.description = this.tripForm.querySelector('#description');
        this.submitTripBtn = this.tripForm.querySelector('#submit');
        this.incomeForm = document.querySelector('.income-form');
        this.incomeSource = this.incomeForm.querySelector('#source');
        this.incomeDate = this.incomeForm.querySelector('#date');
        this.totalIncomeReceived = this.incomeForm.querySelector('#total');
        this.incomePaymentMethod = this.incomeForm.querySelector('#method');
        this.incomeDescription = this.incomeForm.querySelector('#description');
        this.submitIncomeBtn = this.incomeForm.querySelector('#submit');
        this.expenseForm = document.querySelector('#expense-form');
        this.expenseSubject = this.expenseForm.querySelector('#subject');
        this.expenseMerchant = this.expenseForm.querySelector('#merchant');
        this.expenseDate = this.expenseForm.querySelector('#date');
        this.expenseTotal = this.expenseForm.querySelector('#total');
        this.expenseType = this.expenseForm.querySelector('#expense-type');
        this.expensePaymentMethod = this.expenseForm.querySelector('#method');
        this.expenseDescription = this.expenseForm.querySelector('#description');
        this.submitExpenseBtn = this.expenseForm.querySelector('#submit');
        this.mobileNewExpenseBtn = document.querySelector('#mobile-new-expense');
        this.mobileNewTripBtn = document.querySelector('#mobile-new-trip');
        this.mobileNewIncomeBtn = document.querySelector('#mobile-new-income');
        this.showMobileQuickAccess = document.querySelector('#show-mobile-quick-access');
        this.showMobileNavBar = document.querySelector('#show-mobile-nav-bar');
        this.init();
        this.updateProfileElements();
    }

    init() {
        this.showMobileQuickAccess.addEventListener('click', () => {
            const quickAccess = document.querySelector('#mobile-quick-access');
            if (quickAccess.style.transform === 'translateX(0rem)') {
                quickAccess.style.transform = 'translateX(5rem)'
            } else {
                quickAccess.style.transform = 'translateX(0rem)';
            }
        })
        this.showMobileNavBar.addEventListener('click', () => {
            const navBar = document.querySelector('#nav-bar');
            if (navBar.style.transform === 'translateX(0rem)') {
                navBar.style.transform = 'translateX(-5rem)';
            } else {
                navBar.style.transform =  'translateX(0rem)';
            }
        });
        this.mobileNewExpenseBtn.addEventListener('click', () => {
            this.showNewExpenseForm();
        });
        this.mobileNewIncomeBtn.addEventListener('click', () => {
            this.showIncomeForm();
        });
        this.mobileNewTripBtn.addEventListener('click', () => {
            this.showNewTripForm();
        });
        this.submitExpenseBtn.addEventListener('click', () => {
            const expenseInfo = new Expense(this.expenseSubject.value, this.expenseMerchant.value, this.expenseDate.value, this.expenseTotal.value, this.expenseType.value, this.expensePaymentMethod.value, this.expenseDescription.value);
            const expenses = localStorage.getItem('expenses');
            const userProfile = JSON.parse(localStorage.getItem('user_profile'));
            if (parseInt(expenseInfo.total) <= parseInt(userProfile[0].balance)) {
                const newBalance = userProfile[0].balance - parseInt(expenseInfo.total);
                userProfile[0].balance = newBalance;
                localStorage.setItem('user_profile', JSON.stringify(userProfile));
                this.updateProfileElements();
                if (expenses) {
                    const parsedExpenses = JSON.parse(expenses);
                    parsedExpenses.push(expenseInfo);
                    localStorage.setItem('expenses', JSON.stringify(parsedExpenses));
                } else {
                    const expenses = [];
                    expenses.push(expenseInfo);
                    localStorage.setItem('expenses', JSON.stringify(expenses));
                }
            } else {
                alert('Your expense exceeded your current balance');
            }
        });
        this.submitIncomeBtn.addEventListener('click', () => {
            const incomeInfo = new Income(this.incomeSource.value, this.incomeDate.value, this.totalIncomeReceived.value, this.incomePaymentMethod.value, this.incomeDescription.value);
            const incomes = localStorage.getItem('incomes');
            const userProfile = JSON.parse(localStorage.getItem('user_profile'));
            const currentBalance = parseInt(userProfile[0].balance);
            const newBalance = currentBalance + parseInt(incomeInfo.total);
            userProfile[0].balance = newBalance;
            localStorage.setItem('user_profile', JSON.stringify(userProfile));
            this.updateProfileElements();
            if (incomes) {
                const parsedIncome = JSON.parse(incomes);
                parsedIncome.push(incomeInfo);
                localStorage.setItem('incomes', JSON.stringify(parsedIncome));
            } else {
                const incomes = [];
                incomes.push(incomeInfo);
                localStorage.setItem('incomes', JSON.stringify(incomes));
            }
        });
        this.submitTripBtn.addEventListener('click', () => {
            const tripsInfo = new Trips(this.tripFrom.value, this.tripTo.value, this.totalAmountSpent.value, this.dateOfDeparting.value, this.modeOfTransportation.value, this.paymentMethod.value, this.description.value);
            const trips = localStorage.getItem('trips');
            const userProfile = JSON.parse(localStorage.getItem('user_profile'));
            localStorage.setItem('user_profile', JSON.stringify(userProfile));
            this.updateProfileElements();
            if (parseInt(tripsInfo.ammountSpent) <= parseInt(userProfile[0].balance)) {
                if (trips) {
                    const parsedTrips = JSON.parse(trips);
                    parsedTrips.push(tripsInfo);
                    localStorage.setItem('trips', JSON.stringify(parsedTrips));
                    const newBalance = parseInt(userProfile[0].balance) - parseInt(tripsInfo.ammountSpent);
                    userProfile[0].balance = newBalance;
                    localStorage.setItem('user_profile', JSON.stringify(userProfile));
                } else {
                    const trips = [];
                    trips.push(tripsInfo);
                    localStorage.setItem('trips', JSON.stringify(trips));
                    const newBalance = parseInt(userProfile[0].balance) - parseInt(tripsInfo.ammountSpent);
                    userProfile[0].balance = newBalance;
                    localStorage.setItem('user_profile', JSON.stringify(userProfile));
                }
            } else {
                alert('Your balance is not sufficient');
            }
            console.log('hello');
        });
        this.toggleBtn.addEventListener('click', () => {
            const toggle = document.querySelector('.toggle');
            const toggleElement = document.querySelector('#theme-toggler');
            if (!toggleElement.checked) {
                toggle.style.transform = 'translateX(1.8rem)';
            }
            if (toggleElement.checked) {
                toggle.style.transform = 'translateX(0)';
            }
        });
        this.newExpenseButton.addEventListener('click', () => {
            this.showNewExpenseForm();
        });
        this.newExpenseButton2.addEventListener('click', () => {
            this.showNewExpenseForm();
        });
        this.closeExpenseBtn.addEventListener('click', () => {
            this.closeExpenseForm();
        });
        this.newTripButton.addEventListener('click', () => {
            this.showNewTripForm();
        });
        this.newTripButton2.addEventListener('click', () => {
            this.showNewTripForm();
        });
        this.closeTripFormBtn.addEventListener('click', () => {
            this.closeTripForm();
        });
        this.newIncomeBtn.addEventListener('click', () => {
            this.showIncomeForm();
        });
        this.newIncomeBtn2.addEventListener('click', () => {
            this.showIncomeForm();
        });
        this.closeNewIncomeBtn.addEventListener('click', () => {
            this.closeIncomeForm();
        });
        this.homeButton.addEventListener('click', () => {
            this.toHome();
        });
        this.expensesButton.addEventListener('click', () => {
            this.showExpenses();
        });
        this.tripsButton.addEventListener('click', () => {
            this.showTrips();
        });
        this.settingBtn.addEventListener('click', () => {
            this.showSettings();
        });
        this.incomesBtn.addEventListener('click', () => {
            this.showIncomes();
        });
    }

    showNewExpenseForm() {
        this.closeIncomeForm();
        this.closeExpenses();
        this.closeTrips();
        this.closeSetting();
        this.closeIncomes();
        const quickAccess = document.querySelector('#mobile-quick-access');
        if (quickAccess.style.transform === 'translateX(0rem)') {
            quickAccess.style.transform = 'translateX(5rem)'
        }
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
        const quickAccess = document.querySelector('#mobile-quick-access');
        if (quickAccess.style.transform === 'translateX(0rem)') {
            quickAccess.style.transform = 'translateX(5rem)'
        }
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
        const quickAccess = document.querySelector('#mobile-quick-access');
        if (quickAccess.style.transform === 'translateX(0rem)') {
            quickAccess.style.transform = 'translateX(5rem)'
        }
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
        const quickAccess = document.querySelector('#mobile-quick-access');
        if (quickAccess.style.transform === 'translateX(0rem)') {
            quickAccess.style.transform = 'translateX(5rem)'
        }
        const navBar = document.querySelector('#nav-bar');
        if (navBar.style.transform === 'translateX(0rem)') {
            navBar.style.transform = 'translateX(-5rem)';
        }
    }

    showExpenses() {
        this.closeIncomeForm();
        this.closeTripForm();
        this.closeExpenses();
        this.closeTrips();
        this.closeSetting();
        this.closeIncomes();
        const quickAccess = document.querySelector('#mobile-quick-access');
        if (quickAccess.style.transform === 'translateX(0rem)') {
            quickAccess.style.transform = 'translateX(5rem)'
        }
        const navBar = document.querySelector('#nav-bar');
        if (navBar.style.transform === 'translateX(0rem)') {
            navBar.style.transform = 'translateX(-5rem)';
        }
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
        const quickAccess = document.querySelector('#mobile-quick-access');
        if (quickAccess.style.transform === 'translateX(0rem)') {
            quickAccess.style.transform = 'translateX(5rem)'
        }
        const navBar = document.querySelector('#nav-bar');
        if (navBar.style.transform === 'translateX(0rem)') {
            navBar.style.transform = 'translateX(-5rem)';
        }
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
        const quickAccess = document.querySelector('#mobile-quick-access');
        if (quickAccess.style.transform === 'translateX(0rem)') {
            quickAccess.style.transform = 'translateX(5rem)'
        }
        const navBar = document.querySelector('#nav-bar');
        if (navBar.style.transform === 'translateX(0rem)') {
            navBar.style.transform = 'translateX(-5rem)';
        }
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
        const quickAccess = document.querySelector('#mobile-quick-access');
        if (quickAccess.style.transform === 'translateX(0rem)') {
            quickAccess.style.transform = 'translateX(5rem)'
        }
        const navBar = document.querySelector('#nav-bar');
        if (navBar.style.transform === 'translateX(0rem)') {
            navBar.style.transform = 'translateX(-5rem)';
        }
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
        if (userInfo !== null) {
            userName.innerText = userInfo[0].name;
            userBalance.innerText = `Balance: ${userInfo[0].balance + " " + userInfo[0].currency}`;
        }
    }
}