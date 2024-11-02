class CurrentTrips {
    constructor(from, to, date, amount) {
        this.from = from;
        this.to = to;
        this.date = date;
        this.amount = amount;
    }
}
class CurrentExpense {
    constructor(subject, merchant, date, amount) {
        this.subject = subject;
        this.merchant = merchant;
        this.date = date;
        this.amount = amount;
    }
}
class CurrentIncome {
    constructor(source, date, total, method) {
        this.source = source;
        this.date = date;
        this.total = total;
        this.method = method;
    }
}

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

        currentTripsArr.forEach((trip) => {
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

        currentExpensesArr.forEach((expense) => {
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

class allIncomes {
    constructor(source, date, total, method, description) {
        this.source = source;
        this.date = date;
        this.total = total;
        this.method = method;
        this.description = description;
    }
}

const allIncomeArr = []

class UpdateAllIncomes {
    constructor() {
        this.noIncome = document.querySelector('.no-income');
        this.incomes = JSON.parse(localStorage.getItem('incomes'));
        this.incomesTable = document.querySelector('#incomes');
        this.mobileIncomes = document.querySelector('#mobile-all-incomes');
        this.updateElements();
    }
    updateElements() {
        this.incomes.forEach(income => {
            const allIncomeObj = new allIncomes();
            for (const x in income) {
                switch (x) {
                    case 'source':
                        allIncomeObj.source = income[x];
                        break;
                    case 'date':
                        allIncomeObj.date = income[x];
                        break;
                    case 'paymentMethod':
                        allIncomeObj.method = income[x];
                        break;
                    case 'total':
                        allIncomeObj.total = income[x];
                        break;
                    case 'description':
                        allIncomeObj.description = income[x];
                        break;
                    default:
                        break;
                }
            }
            allIncomeArr.push(allIncomeObj);
        });
        console.log(allIncomeArr);
        allIncomeArr.forEach(income => {
            const currency = JSON.parse(localStorage.getItem('user_profile'));
            const incomesTableRow = document.createElement('tr');
            const mobileRow = document.createElement('div');

            const mobileSource = document.createElement('p');
            mobileSource.textContent = `Source: ${income.source}`;
            mobileRow.appendChild(mobileSource);


            const sourceCell = document.createElement('td');
            sourceCell.textContent = income.source;
            incomesTableRow.appendChild(sourceCell);

            const mobileAmount = document.createElement('p');
            mobileAmount.textContent = `Amount: ${income.total} ${currency[0].currency}`;
            mobileRow.appendChild(mobileAmount);

            const amountCell = document.createElement('td');
            amountCell.textContent = `${income.total + currency[0].currency}`;
            incomesTableRow.appendChild(amountCell);

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

            mobileRow.title = `Description: ${income.description}`;
            incomesTableRow.title = `Description: ${income.description}`;

            this.mobileIncomes.appendChild(mobileRow);
            this.incomesTable.appendChild(incomesTableRow);

            this.noIncome.style.display = 'none';
        });
    }
}


class allExpenses {
    constructor(subject, merchant, method, type, date, amount, description) {
        this.subject = subject;
        this.merchant = merchant;
        this.method = method;
        this.type = type;
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
}
const allExpensesArr = [];

class UpdateAllExpense {
    constructor() {
        this.expenses = JSON.parse(localStorage.getItem('expenses'));
        this.expensesTable = document.querySelector('#expenses');
        this.allMobileExpenses = document.querySelector('#mobile-all-expenses');
        this.updateElements();
    }
    updateElements() {
        this.expenses.forEach(expense => {
            const allExpenseObj = new allExpenses();
            for (const x in expense) {
                switch (x) {
                    case 'date':
                        allExpenseObj.date = expense[x];
                        break;
                    case 'expenseType':
                        allExpenseObj.type = expense[x];
                        break;
                    case 'paymentMethod':
                        allExpenseObj.method = expense[x];
                        break;
                    case 'total':
                        allExpenseObj.amount = expense[x];
                        break;
                    case 'description':
                        allExpenseObj.description = expense[x];
                        break;
                    case 'subject':
                        allExpenseObj.subject = expense[x];
                        break;
                    case 'merchant':
                        allExpenseObj.merchant = expense[x];
                        break;
                    default:
                        break;
                }
            }
            allExpensesArr.push(allExpenseObj);
        });
        console.log(allExpensesArr);
        allExpensesArr.forEach(expense => {
            const currency = JSON.parse(localStorage.getItem('user_profile'));
            const expensesTableRow = document.createElement('tr');
            const mobileRow = document.createElement('div');

            const mobileSubject = document.createElement('p');
            mobileSubject.textContent = `Subject: ${expense.subject}`;
            mobileRow.appendChild(mobileSubject);

            const subjectCell = document.createElement('td');
            subjectCell.textContent = expense.subject;
            expensesTableRow.appendChild(subjectCell);

            const mobileMerchant = document.createElement('p');
            mobileMerchant.textContent = `Merchant: ${expense.merchant}`;
            mobileRow.appendChild(mobileMerchant);

            const merchantCell = document.createElement('td');
            merchantCell.textContent = `${expense.merchant}`;
            expensesTableRow.appendChild(merchantCell);

            const mobileAmount = document.createElement('p');
            mobileAmount.textContent = `Amount: ${expense.amount} ${currency[0].currency}`;
            mobileRow.appendChild(mobileAmount);

            const amountCell = document.createElement('td');
            amountCell.textContent = expense.amount + ' ' + currency[0].currency;
            expensesTableRow.appendChild(amountCell);

            const mobileDate = document.createElement('p');
            mobileDate.textContent = `Date: ${expense.date}`;
            mobileRow.appendChild(mobileDate);

            const dateCell = document.createElement('td');
            dateCell.textContent = expense.date;
            expensesTableRow.appendChild(dateCell);

            const mobileMethod = document.createElement('p');
            mobileMethod.textContent = `Payment Method: ${expense.method}`;
            mobileRow.appendChild(mobileMethod);

            const methodCell = document.createElement('td');
            methodCell.textContent = `${expense.method}`;
            expensesTableRow.appendChild(methodCell);

            mobileRow.title = `Description: ${expense.description}`

            expensesTableRow.title = `Description: ${expense.description}`;

            this.allMobileExpenses.appendChild(mobileRow);

            this.expensesTable.appendChild(expensesTableRow);

        });
    }
}

class allTrips {
    constructor(from, to, method, mode, date, amount, description) {
        this.from = from;
        this.to = to;
        this.method = method;
        this.mode = mode;
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
}
const allTripsArr = [];

class UpdateAllTrips {
    constructor() {
        this.trips = JSON.parse(localStorage.getItem('trips'));
        this.tripsTable = document.querySelector('#trips');
        this.mobileTrips = document.querySelector('#mobile-all-trips');
        this.updateElements();
    }
    updateElements() {
        this.trips.forEach(trip => {
            const allTripsObj = new allExpenses();
            for (const x in trip) {
                switch (x) {
                    case 'dateOfDeparting':
                        allTripsObj.date = trip[x];
                        break;
                    case 'modeOfTransportation':
                        allTripsObj.mode = trip[x];
                        break;
                    case 'paymentMethod':
                        allTripsObj.method = trip[x];
                        break;
                    case 'ammountSpent':
                        allTripsObj.amount = trip[x];
                        break;
                    case 'description':
                        allTripsObj.description = trip[x];
                        break;
                    case 'from':
                        allTripsObj.from = trip[x];
                        break;
                    case 'to':
                        allTripsObj.to = trip[x];
                        break;
                    default:
                        break;
                }
            }
            allTripsArr.push(allTripsObj);
        });
        console.log(allTripsArr);
        allTripsArr.forEach(trip => {
            const currency = JSON.parse(localStorage.getItem('user_profile'));
            const tripsTableRow = document.createElement('tr');
            const mobileRow = document.createElement('div');

            const mobileFrom = document.createElement('p');
            mobileFrom.textContent = `From: ${trip.from}`;
            mobileRow.appendChild(mobileFrom);

            const fromCell = document.createElement('td');
            fromCell.textContent = trip.from;
            tripsTableRow.appendChild(fromCell);

            const mobileTo = document.createElement('p');
            mobileTo.textContent = `To: ${trip.to}`;
            mobileRow.appendChild(mobileTo);

            const toCell = document.createElement('td');
            toCell.textContent = `${trip.to}`;
            tripsTableRow.appendChild(toCell);

            const mobileMode = document.createElement('p');
            mobileMode.textContent = `Mode of trasportation: ${trip.mode}`;
            mobileRow.appendChild(mobileMode);

            const modeCell = document.createElement('td');
            modeCell.textContent = trip.mode;
            tripsTableRow.appendChild(modeCell);

            const mobileDate = document.createElement('p');
            mobileDate.textContent = `Date: ${trip.date}`;
            mobileRow.appendChild(mobileDate);

            const dateCell = document.createElement('td');
            dateCell.textContent = trip.date;
            tripsTableRow.appendChild(dateCell);

            const mobileAmount = document.createElement('p');
            mobileAmount.textContent = `Amount: ${trip.amount}`;
            mobileRow.appendChild(mobileAmount);

            const amountCell = document.createElement('td');
            amountCell.textContent = `${trip.amount} ${currency[0].currency}`;
            tripsTableRow.appendChild(amountCell);

            tripsTableRow.title = `Description: ${trip.description} <br> Mode of transportation: ${trip.method}`;
            this.mobileTrips.appendChild(mobileRow);
            this.tripsTable.appendChild(tripsTableRow);

        });
    }
}
