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

const currentTripsArr = [];

class UpdateCurrentTripsElements {
    constructor() {
        this.table = document.querySelector('.recent-trips');
        this.getRecentTrips();
    }

    getRecentTrips() {
        this.savedTrips = JSON.parse(localStorage.getItem('trips'));

        const recentTrips = this.savedTrips.slice(-2);

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

            const fromCell = document.createElement('td');
            fromCell.textContent = trip.from;
            tripsTableRow.appendChild(fromCell);

            const toCell = document.createElement('td');
            toCell.textContent = trip.to;
            tripsTableRow.appendChild(toCell);

            const dateCell = document.createElement('td');
            dateCell.textContent = trip.date;
            tripsTableRow.appendChild(dateCell);

            const amountCell = document.createElement('td');
            amountCell.textContent = trip.amount;
            tripsTableRow.appendChild(amountCell);

            this.table.appendChild(tripsTableRow);
        });

        console.log(currentTripsArr);
    }
}

new UpdateCurrentTripsElements();
const currentExpensesArr = [];

class UpdateCurrentExpensesElements {
    constructor() {
        this.table = document.querySelector('.recent-expenses');
        this.getRecentTrips();
    }

    getRecentTrips() {
        this.savedExpenses = JSON.parse(localStorage.getItem('expenses'));

        const recentExpenses = this.savedExpenses.slice(-2);

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

            const subjectCell = document.createElement('td');
            subjectCell.textContent = expense.subject;
            expensesTableRow.appendChild(subjectCell);

            const merchantCell = document.createElement('td');
            merchantCell.textContent = expense.merchant;
            expensesTableRow.appendChild(merchantCell);

            const dateCell = document.createElement('td');
            dateCell.textContent = expense.date;
            expensesTableRow.appendChild(dateCell);

            const amountCell = document.createElement('td');
            amountCell.textContent = expense.amount;
            expensesTableRow.appendChild(amountCell);

            this.table.appendChild(expensesTableRow);
        });

        console.log(currentExpensesArr);
    }
}

new UpdateCurrentExpensesElements();
