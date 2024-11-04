class allIncomes {
    constructor(source, date, total, method, description) {
        this.source = source;
        this.date = date;
        this.total = total;
        this.method = method;
        this.description = description;
    }
}
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