class CurrentTrips {
    constructor(from, to, date, amount) {
        this.from = from;
        this.to = to;
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
