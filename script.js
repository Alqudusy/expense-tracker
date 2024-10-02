class ExpenseApp {
    constructor() {
        this.init();
    }

    init() {
        const newExpenseButton = document.querySelector('#new-expense');
        newExpenseButton.addEventListener('click', () => {
            this.showNewExpenseForm();
        });
    }

    showNewExpenseForm() {
        const mainDivToRemove = document.querySelector('.main');
        const newDiv = document.createElement('div');
        const form = document.createElement('form');
        form.classList.add('expense-form');

        const labelSubject = document.createElement('label');
        labelSubject.textContent = "Subject";
        labelSubject.setAttribute('for', 'subject')
        const subjectInputField = document.createElement('input');
        subjectInputField.setAttribute('id', 'subject');


        const labelMerchant = document.createElement('label');
        labelMerchant.setAttribute('for', 'merchant');
        labelMerchant.textContent = 'Merchant*';
        const merchantInputField = document.createElement('input');
        merchantInputField.setAttribute('id', 'merchant');


        const labelDate = document.createElement('label');
        labelDate.textContent = 'Date';
        labelDate.setAttribute('for', 'date');
        const dateInputField = document.createElement('input');
        const dateAttributes = {
            'id': 'date',
            'type': 'date'
        }
        for (const key in dateAttributes) {
             dateInputField.setAttribute(key, dateAttributes[key]);
        }


        const totalInputField = document.createElement('input');
        const labelTotal = document.createElement('label');
        labelTotal.textContent = 'total'
        labelTotal.setAttribute('for', 'total');
        const totalAttributes = {
            'id': 'total',
            'type': 'number'
        }
        for (const key in totalAttributes) {
             totalInputField.setAttribute(key, totalAttributes[key]);
        }


        const currencySelector = document.createElement('select');
        const currencyOptions = ['Currency', 'EUR', 'USD', 'GBP'];
        currencyOptions.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.textContent = option;
            currencySelector.appendChild(optionElement);
        });

        
        const labelCategory = document.createElement('label');
        labelCategory.setAttribute('for', 'category');
        labelCategory.textContent = "category";
        const categorySelector = document.createElement('select');
        categorySelector.setAttribute('id', 'category');
        const categoryOptons = ['Type', 'Trip', 'Services', 'Catering'];
        categoryOptons.forEach(option => {
            const optionElement = document.createElement('option')
            optionElement.textContent = option;
            categorySelector.appendChild(optionElement);
        });


        const labelDescription = document.createElement('label');
        labelDescription.setAttribute('for', 'description');
        labelDescription.textContent = "description"
        const descriptionInputField = document.createElement('input');
        descriptionInputField.setAttribute('id', 'description');


        const labelEmployee = document.createElement('label');
        labelEmployee.textContent = "Employee*";
        labelEmployee.setAttribute('for', 'employee');
        const employeeInputField = document.createElement('input');
        employeeInputField.setAttribute('id', 'employee');


        newDiv.classList.add('main');
        form.append(labelSubject, subjectInputField, labelMerchant, merchantInputField, labelDate, dateInputField, labelTotal, totalInputField, currencySelector, categorySelector, employeeInputField);
        newDiv.appendChild(form);
        document.querySelector('body').removeChild(mainDivToRemove);
        document.querySelector('body').appendChild(newDiv);
        console.log(window.getComputedStyle(newDiv));
    }
}
new ExpenseApp();