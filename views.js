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
        this.getRecentTrips();
    }
    getRecentTrips() {
        this.savedTrips = JSON.parse(localStorage.getItem('trips'));
        const currentTripObj = new CurrentTrips();
        const recentTrips = this.savedTrips.slice(-1);
        recentTrips.forEach(trip => {
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
        console.log((currentTripsArr));
    }
}
new UpdateCurrentTripsElements();