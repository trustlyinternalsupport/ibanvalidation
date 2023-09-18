import countries from './countries.js';

// Account Class
class Account {
    constructor(iban) {
        // Format and trim the inputted IBAN
        this.iban = iban.replace(/[^0-9a-zA-Z]/g, '').toUpperCase().trim();

        // Get country code
        this.countryCode = this.getCountryCode();

        // Get IBAN components
        this.ibanComponents = this.getIbanComponents();
    }

    // Extract country code
    getCountryCode() {
        const ibanCountryCode = this.iban.substring(0, 2);

        // Get country code if exists in structure
        if (countries.hasOwnProperty(ibanCountryCode)) {
            return ibanCountryCode;
        } else {
            return 'Unknown Country Code';
        }
    }

    // Extract IBAN components
    getIbanComponents() {
        const countryInfo = countries[this.countryCode];
        const extracted = {};

        // Get country parameters if countryInfo exists
        if (countryInfo) {
            for (const component in countryInfo) {
                extracted[component] = countryInfo[component];
            }

            // Get country IBAN structure if it exists
            if (countryInfo.ibanStructure) {
                for (const component in countryInfo.ibanStructure) {
                    const positions = countryInfo.ibanStructure[component].position;
                    const value = this.iban.substring(positions[0], positions[1]);

                    if (countryInfo.ibanStructure[component].type === 'number') {
                        extracted[component] = parseInt(value, 10);
                    } else {
                        extracted[component] = value;
                    }
                }
            }
        }

        return extracted;
    }

    // Validate IBAN Lenght
    validateIbanLength() {
        if (this.iban.length === this.ibanComponents.ibanLength) {
            return true;
        } else {
            return false;
        }
    }

    // ISO 7064 MOD-97-10 Validation
    moduloValidation() {

        // Create working variable
        var tmp;

        // Move the first 4 characters to the end
        tmp = this.iban.substring(4) + this.iban.substring(0, 4);

        // Replace letters with digits
        tmp = tmp.replace(/[A-Z]/g, (char) => char.charCodeAt(0) - 55);

        // Initialize variables for the manual modulo operation
        let remainder = '';
        for (let i = 0; i < tmp.length; i++) {
            const currentChar = tmp[i];
            remainder += currentChar;

            // If the remainder is too long, perform the modulo operation
            if (remainder.length >= 9) {
                remainder = String(BigInt(remainder) % 97n);
            }
        }

        // Perform the final modulo operation
        remainder = String(BigInt(remainder) % 97n);

        if (remainder === '1') {
            return true;
        }

        return false;
    }
}


// Listen and Response
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('validateButton').addEventListener('click', function () {
        const ibanInput = document.getElementById('ibanInput').value;
        const account = new Account(ibanInput);

        // Bank Details
        document.querySelector('#countryName').textContent = account.ibanComponents.name;
        document.querySelector('#countryCode').textContent = account.ibanComponents.countryCode;
        document.querySelector('#checkSumDigits').textContent = account.ibanComponents.checkSumDigits;
        document.querySelector('#bankNumber').textContent = account.ibanComponents.bankNumber;
        document.querySelector('#branchCode').textContent = account.ibanComponents.branchCode;
        document.querySelector('#accountNumber').textContent = account.ibanComponents.accountNumber;
        document.querySelector('#nationalCode').textContent = account.ibanComponents.nationalCode;

        // Validations
        document.querySelector('#ibanLength').textContent = account.validateIbanLength();
        document.querySelector('#isoModulo').textContent = account.moduloValidation();


        // Result
        const result = document.querySelector('#result');

        if (account.validateIbanLength() && account.moduloValidation()) {
            result.textContent = 'IBAN is valid!';
            result.style.color = 'green';
        } else {
            result.textContent = 'IBAN is invalid!';
            result.style.color = 'red';
        }
    });
});

// DE89370400440532013000