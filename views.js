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
        this.savedTrips.forEach(trip => {
            for (const x in trip) {
                switch (x) {
                    case 'from':
                         
                        break;
                
                    default:
                        break;
                }
            }
        });
    }
}
new UpdateCurrentTripsElements();