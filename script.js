class ExpenseApp {
    constructor() {
        this.init();
    }

    init() {
        const newExpenseButton = document.querySelector('#new-expense');
        newExpenseButton.addEventListener('click', () => {
            this.showNewExpenseForm();
        });
        this.renderEventListener();
    }
    

    renderEventListener() {
            this.showNewExpenseForm();
    }


    showNewExpenseForm() {
        const mainDivToRemove = document.querySelector('.main');
        const copyOfMain = mainDivToRemove.cloneNode(true);
        const uploadContainer = document.createElement('div');
        uploadContainer.className = 'upload-container';

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.id = 'file-input';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none';
        
        const uploadLabel = document.createElement('label');
        uploadLabel.setAttribute('for', 'file-input');
        uploadLabel.className = 'upload-label';
        
        const uploadIcon = document.createElement('span');
        uploadIcon.className = 'upload-icon';
        uploadIcon.innerText = '+';
        
        const uploadText = document.createElement('span');
        uploadText.className = 'upload-text';
        uploadText.innerText = 'Upload an invoice';
        
        uploadLabel.appendChild(uploadIcon);
        uploadLabel.appendChild(uploadText);
        uploadContainer.appendChild(fileInput);
        uploadContainer.appendChild(uploadLabel);


        fileInput.addEventListener('change', () => {
            const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'Upload an invoice';
            uploadText.innerText = fileName;
        });


        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'form-div')

        const headerDiv = document.createElement('div');
        headerDiv.setAttribute('id', 'header');
        const headerH2 = document.createElement('h2');
        headerH2.textContent = 'New expense';
        const headerBtn = document.createElement('button');
        headerBtn.innerText = "X";
        headerBtn.setAttribute('id', 'header-btn');

        headerDiv.append(headerH2, headerBtn);


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
        labelTotal.textContent = 'Total'
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
        labelDescription.textContent = "Description";
        const descriptionInputField = document.createElement('input');
        descriptionInputField.setAttribute('id', 'description');


        const labelEmployee = document.createElement('label');
        labelEmployee.textContent = "Employee*";
        labelEmployee.setAttribute('for', 'employee');
        const employeeInputField = document.createElement('input');
        employeeInputField.setAttribute('id', 'employee');

        const submitBtn = document.createElement('button');
        submitBtn.innerText = "Submit"
        submitBtn.setAttribute('id', 'submit-button');
        submitBtn.setAttribute('type', 'submit');


        newDiv.classList.add('main');
        form.append(labelSubject,
             subjectInputField,
             labelMerchant,
             merchantInputField,
             labelDate,
             dateInputField,
             labelTotal,
             totalInputField,
             currencySelector,
             categorySelector,
             labelEmployee,
             employeeInputField,
             labelDescription,
             descriptionInputField,
             submitBtn);
        newDiv.append(headerDiv, form, uploadContainer);
        document.querySelector('body').removeChild(mainDivToRemove);
        document.querySelector('body').appendChild(newDiv);
        document.querySelector('#header-btn').addEventListener('click', () => {
            document.querySelector('#header-btn').parentElement.parentNode.remove();
            document.querySelector('body').appendChild(copyOfMain);
            const mainElement = document.querySelector('.main');
            mainElement.querySelector('#new-expense').addEventListener('click', () => {
                this.renderEventListener();
            })
            renderChart();
        });
    }
}
new ExpenseApp();