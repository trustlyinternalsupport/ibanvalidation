const countries = {
    'DE': {
        name: 'Germany',
        ibanLength: 22,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
                type: 'string'
            },
            checkSumDigits: {
                position: [2, 4],
                type: 'number'
            },
            bankNumber: {
                position: [4, 12],
                type: 'string'
            },
            accountNumber: {
                position: [12, 22],
                type: 'string'
            }
        }
    },
    'FR': {
        name: 'France',
        ibanLength: 27,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
                type: 'string'
            },
            checkSumDigits: {
                position: [2, 4],
                type: 'number'
            },
            bankNumber: {
                position: [4, 9],
                type: 'string'
            },
            branchCode: {
                position: [9, 14],
                type: 'string'
            },
            accountNumber: {
                position: [14, 25],
                type: 'string'
            },
            nationalCode: {
                position: [25, 27],
                type: 'string'
            }
        }
    },
    'MT': {
        name: 'Malta',
        ibanLength: 31,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
                type: 'string'
            },
            checkSumDigits: {
                position: [2, 4],
                type: 'number'
            },
            bankNumber: {
                position: [4, 8],
                type: 'string'
            },
            branchCode: {
                position: [8, 13],
                type: 'string'
            },
            accountNumber: {
                position: [13, 31],
                type: 'string'
            }
        }
    },
    // Add more EU countries here
};

export default countries;
