class InitializeAndAuthorize {
    constructor() {
        this.firstVisit = JSON.parse(localStorage.getItem('first_visit'));
        this.userInfo = JSON.parse(localStorage.getItem('user_profile'));
        this.incomes = localStorage.getItem('incomes')
        this.trips = localStorage.getItem('trips');
        this.expenses = localStorage.getItem('expenses');
        if (!this.firstVisit && !this.userInfo) {
            this.register();
        } else {
            if (this.incomes !== null) {
                new UpdateCurrentIncomesElements();
                new UpdateAllIncomes();
            }
            if (this.trips !== null) {
                new UpdateCurrentTripsElements();
                new UpdateAllTrips();
            }
            if (this.expenses !== null) {
                new UpdateCurrentExpensesElements();
                new UpdateAllExpense();
            }
            this.updateProfileElements();
            new ExpenseApp();
        }
    }
    register() {
        const name = prompt('Please enter your name');
        const balance = prompt('Please enter your current balance');
        const currency = prompt(`Please what is your currency`);
        if ((name !== "" && balance !== "" && currency !== "") && (name !== null && balance !== null && currency !== null)) {
            const newUser = new User(name, balance, currency);
            const userProfile = [];
            userProfile.push(newUser);
            localStorage.setItem('user_profile', JSON.stringify(userProfile));
            if (this.incomes !== null) {
                new UpdateCurrentIncomesElements();
                new UpdateAllIncomes();
            }
            if (this.trips !== null) {
                new UpdateCurrentTripsElements();
                new UpdateAllTrips();
            }
            if (this.expenses !== null) {
                new UpdateCurrentExpensesElements();
                new UpdateAllExpense();
            }
            localStorage.setItem('first_visit', JSON.stringify(true));
            this.updateProfileElements();
            new ExpenseApp();
        } else {
            this.register();
        }
    }
    updateProfileElements() {
        const userName = document.querySelector('#profile-name');
        const mobileUserName = document.querySelector('#mobile-profile-name');
        const mobileUserBalance = document.querySelector('.mobile-user-balance')
        const userBalance = document.querySelector('.user-balance');
        const userInfo = JSON.parse(localStorage.getItem('user_profile'));
        mobileUserName.innerText = userInfo[0].name;
        userName.innerText = userInfo[0].name;
        userBalance.innerText = `Balance: ${userInfo[0].balance}`;
        mobileUserBalance.innerText = `Balance: ${userInfo[0].balance} ${userInfo[0].currency}`;
    }
}
new InitializeAndAuthorize();