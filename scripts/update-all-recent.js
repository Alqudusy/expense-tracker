const currentTripsArr = [];

class UpdateCurrentTripsElements {
    constructor() {
        this.savedTrips = JSON.parse(localStorage.getItem('trips'));
        this.table = document.querySelector('.recent-trips');
        this.mobileTrips = document.querySelector('#mobile-recent-trips');
        if (this.savedTrips !== null) {
            this.getRecentTrips();
        }
    }

    getRecentTrips() {

        const recentTrips = this.savedTrips.slice(-2);
        const currency = JSON.parse(localStorage.getItem('user_profile'));
        recentTrips.forEach(trip => {
            const currentTripObj = new CurrentTrips();
            for (const x in trip) {
                switch (x) {
                    case 'from':
                        currentTripObj.from = trip[x];
                        break;
                    case 'to':
                        currentTripObj.to = trip[x];
                        break;
                    case 'dateOfDeparting':
                        currentTripObj.date = trip[x];
                        break;
                    case 'ammountSpent':
                        currentTripObj.amount = trip[x];
                        break;
                    default:
                        break;
                }
            }
            currentTripsArr.push(currentTripObj);
        });

        currentTripsArr.forEach(trip => {
            const tripsTableRow = document.createElement('tr');
            const mobileRow = document.createElement('div');

            const mobileFrom = document.createElement('p');
            mobileFrom.textContent = `From ${trip.from}`;
            mobileRow.appendChild(mobileFrom);

            const fromCell = document.createElement('td');
            fromCell.textContent = trip.from;
            tripsTableRow.appendChild(fromCell);

            const mobileTo = document.createElement('p');
            mobileTo.textContent = `To: ${trip.to}`;
            mobileRow.appendChild(mobileTo);

            const toCell = document.createElement('td');
            toCell.textContent = trip.to;
            tripsTableRow.appendChild(toCell);

            const mobileDate = document.createElement('p');
            mobileDate.textContent = `Date: ${trip.date}`;
            mobileRow.appendChild(mobileDate);

            const dateCell = document.createElement('td');
            dateCell.textContent = trip.date;
            tripsTableRow.appendChild(dateCell);

            const mobileAmount = document.createElement('p');
            mobileAmount.textContent = `Amount ${trip.amount + " " + currency[0].currency}`;
            mobileRow.appendChild(mobileAmount);

            const amountCell = document.createElement('td');
            amountCell.textContent = `${trip.amount + currency[0].currency}`;
            tripsTableRow.appendChild(amountCell);
            this.mobileTrips.appendChild(mobileRow);
            this.table.appendChild(tripsTableRow);
        });
    }
}


const currentExpensesArr = [];

class UpdateCurrentExpensesElements {
    constructor() {
        this.savedExpenses = JSON.parse(localStorage.getItem('expenses'));
        this.table = document.querySelector('.recent-expenses');
        this.mobileExpenses = document.querySelector('#mobile-recent-expenses');
        if (this.savedExpenses !== null) {
            this.getRecentTrips();
        }
    }

    getRecentTrips() {

        const recentExpenses = this.savedExpenses.slice(-2);
        const currency = JSON.parse(localStorage.getItem('user_profile'));
        recentExpenses.forEach(expense => {
            const currentExpenseObj = new CurrentTrips();
            for (const x in expense) {
                switch (x) {
                    case 'subject':
                        currentExpenseObj.subject = expense[x];
                        break;
                    case 'merchant':
                        currentExpenseObj.merchant = expense[x];
                        break;
                    case 'date':
                        currentExpenseObj.date = expense[x];
                        break;
                    case 'total':
                        currentExpenseObj.amount = expense[x];
                        break;
                    default:
                        break;
                }
            }
            currentExpensesArr.push(currentExpenseObj);
        });

        currentExpensesArr.forEach(expense => {
            const expensesTableRow = document.createElement('tr');
            const mobileRow = document.createElement('div');

            const mobileSubject = document.createElement('p');
            mobileSubject.textContent = `Subject: ${expense.subject}`;
            mobileRow.appendChild(mobileSubject);

            const subjectCell = document.createElement('td');
            subjectCell.textContent = expense.subject;
            expensesTableRow.appendChild(subjectCell);

            const mobileMerchant = document.createElement('p')
            mobileMerchant.textContent = `Merchant: ${expense.merchant}`;
            mobileRow.appendChild(mobileMerchant);

            const merchantCell = document.createElement('td');
            merchantCell.textContent = expense.merchant;
            expensesTableRow.appendChild(merchantCell);

            const mobileDate = document.createElement('p');
            mobileDate.textContent = `Date: ${expense.date}`;
            mobileRow.appendChild(mobileDate);

            const dateCell = document.createElement('td');
            dateCell.textContent = expense.date;
            expensesTableRow.appendChild(dateCell);

            const mobileAmount = document.createElement('p');
            mobileAmount.textContent = `Amount: ${expense.amount}`;
            mobileRow.appendChild(mobileAmount)

            const amountCell = document.createElement('td');
            amountCell.textContent = `${expense.amount + currency[0].currency}`;
            expensesTableRow.appendChild(amountCell);

            this.mobileExpenses.appendChild(mobileRow);
            this.table.appendChild(expensesTableRow);
        });
    }
}


const currentIncomesArr = [];

class UpdateCurrentIncomesElements {
    constructor() {
        this.savedIncomes = JSON.parse(localStorage.getItem('incomes'));
        this.table = document.querySelector('.recent-incomes');
        this.mobileIncome = document.querySelector('#mobile-recent-incomes');
        if (this.savedIncomes !== null) {
            this.getRecentIncomes();
        }
    }

    getRecentIncomes() {

        const recentIncomes = this.savedIncomes.slice(-2);

        recentIncomes.forEach(income => {
            const currentIncomeObj = new CurrentIncome();
            for (const x in income) {
                switch (x) {
                    case 'source':
                        currentIncomeObj.source = income[x];
                        break;
                    case 'date':
                        currentIncomeObj.date = income[x];
                        break;
                    case 'paymentMethod':
                        currentIncomeObj.method = income[x];
                        break;
                    case 'total':
                        currentIncomeObj.total = income[x];
                        break;
                    default:
                        break;
                }
            }
            currentIncomesArr.push(currentIncomeObj);
        });

        currentIncomesArr.forEach(income => {
            const currency = JSON.parse(localStorage.getItem('user_profile'));
            const incomesTableRow = document.createElement('tr');
            const mobileRow = document.createElement('div');

            const mobileSource = document.createElement('p');
            mobileSource.textContent = `Source: ${income.source}`;
            mobileRow.appendChild(mobileSource);

            const sourceCell = document.createElement('td');
            sourceCell.textContent = income.source;
            incomesTableRow.appendChild(sourceCell);

            const mobileDate = document.createElement('p');
            mobileDate.textContent = `Date: ${income.date}`;
            mobileRow.appendChild(mobileDate);

            const dateCell = document.createElement('td');
            dateCell.textContent = income.date;
            incomesTableRow.appendChild(dateCell);

            const mobileMethod = document.createElement('p');
            mobileMethod.textContent = `Method: ${income.method}`;
            mobileRow.appendChild(mobileMethod);

            const methodCell = document.createElement('td');
            methodCell.textContent = `${income.method}`;
            incomesTableRow.appendChild(methodCell);

            const mobileAmount = document.createElement('p');
            mobileAmount.textContent = `Amount: ${income.total} ${currency[0].currency}`;
            mobileRow.appendChild(mobileAmount);

            const amountCell = document.createElement('td');
            amountCell.textContent = `${income.total + currency[0].currency}`;
            incomesTableRow.appendChild(amountCell);

            this.mobileIncome.appendChild(mobileRow);
            this.table.appendChild(incomesTableRow);
        });
    }
}
