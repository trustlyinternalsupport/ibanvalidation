const countries = {
    'AL': {
        name: 'Albania',
        ibanLength: 28,
        ibanStructure: {
            countryCode: {
                position: [0, 2]
            },
            checkSumDigits: {
                position: [2, 4]
            },
            bankNumber: {
                position: [4, 7]
            },
            branchCode: {
                position: [7, 11]
            },
            nationalCode: {
                position: [11, 12]
            },
            accountNumber: {
                position: [12, 30]
            }
        },
        supportsSEPA: false
    },
    'AD': {
        name: 'Andorra',
        ibanLength: 24,
        ibanStructure: {
            countryCode: {
                position: [0, 2]
            },
            checkSumDigits: {
                position: [2, 4]
            },
            bankNumber: {
                position: [4, 8]
            },
            branchCode: {
                position: [8, 12]
            },
            accountNumber: {
                position: [12, 24]
            }
        },
        supportsSEPA: false
    },
    'AT': {
        name: 'Austria',
        ibanLength: 20,
        ibanStructure: {
            countryCode: {
                position: [0, 2]
            },
            checkSumDigits: {
                position: [2, 4]
            },
            bankNumber: {
                position: [4, 9]
            },
            accountNumber: {
                position: [9, 20]
            }
        },
        supportsSEPA: true
    },
    'AZ': {
        name: 'Azerbaijan',
        ibanLength: 28,
        ibanStructure: {
            countryCode: {
                position: [0, 2]
            },
            checkSumDigits: {
                position: [2, 4]
            },
            bankNumber: {
                position: [4, 8]
            },
            accountNumber: {
                position: [8, 28]
            }
        },
        supportsSEPA: false
    },
    'BH': {
        name: 'Bahrain',
        ibanLength: 22,
        ibanStructure: {
            countryCode: {
                position: [0, 2]
            },
            checkSumDigits: {
                position: [2, 4]
            },
            bankNumber: {
                position: [4, 8]
            },
            accountNumber: {
                position: [8, 22]
            }
        },
        supportsSEPA: false
    },
    'BE': {
        name: 'Belgium',
        ibanLength: 16,
        ibanStructure: {
            countryCode: {
                position: [0, 2]
            },
            checkSumDigits: {
                position: [2, 4]
            },
            bankNumber: {
                position: [4, 7]
            },
            accountNumber: {
                position: [7, 14]
            },
            nationalCode: {
                position: [14, 16]
            }
        },
        supportsSEPA: true
    },
    'BA': {
        name: 'Bosnia and Herzegovina',
        ibanLength: 20,
        ibanStructure: {
            countryCode: {
                position: [0, 2]
            },
            checkSumDigits: {
                position: [2, 4]
            },
            bankNumber: {
                position: [4, 7]
            },
            branchCode: {
                position: [7, 10]
            },
            accountNumber: {
                position: [10, 18]
            },
            nationalCode: {
                position: [18, 20]
            }
        },
        supportsSEPA: false
    },
    'BR': {
        name: 'Brazil',
        ibanLength: 29,
        ibanStructure: {
            countryCode: {
                position: [0, 2]
            },
            checkSumDigits: {
                position: [2, 4]
            },
            bankNumber: {
                position: [4, 12]
            },
            branchCode: {
                position: [12, 17]
            },
            accountNumber: {
                position: [17, 27]
            },
            accountType: {
                position: [27, 28]
            },
            ownerType: {
                position: [28, 29]
            }
        },
        supportsSEPA: false
    },
    'BG': {
        name: 'Bulgaria',
        ibanLength: 22,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            branchCode: {
                position: [8, 12],
            },
            accountType: {
                position: [12, 14],
            },
            accountNumber: {
                position: [14, 22],
            },
        },
        supportsSEPA: true
    },
    'CR': {
        name: 'Costa Rica',
        ibanLength: 22,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            reservedCharacter: {
                position: [4, 5],
            },
            bankNumber: {
                position: [5, 8],
            },
            accountNumber: {
                position: [8, 22],
            },
        },
        supportsSEPA: false
    },
    'HR': {
        name: 'Croatia',
        ibanLength: 21,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [5, 11],
            },
            accountNumber: {
                position: [11, 21],
            },
        },
        supportsSEPA: true
    },
    'CY': {
        name: 'Cyprus',
        ibanLength: 28,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            branchCode: {
                position: [7, 12],
            },
            accountNumber: {
                position: [12, 28],
            },
        },
        supportsSEPA: true
    },
    'CZ': {
        name: 'Czech Republic',
        ibanLength: 24,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 24],
            },
        },
        supportsSEPA: true
    },
    'DK': {
        name: 'Denmark',
        ibanLength: 18,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 18],
            },
        },
        supportsSEPA: true
    },
    'DO': {
        name: 'Dominican Republic',
        ibanLength: 28,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 28],
            },
        },
        supportsSEPA: false
    },
    'EG': {
        name: 'Egypt',
        ibanLength: 29,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            branchCode: {
                position: [8, 12],
            },
            accountNumber: {
                position: [12, 29],
            },
        },
        supportsSEPA: false
    },
    'SV': {
        name: 'El Salvador',
        ibanLength: 28,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 28],
            },
        },
        supportsSEPA: false
    },
    'EE': {
        name: 'Estonia',
        ibanLength: 20,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 6],
            },
            branchCode: {
                position: [6, 8],
            },
            accountNumber: {
                position: [8, 19],
            },
            nationalCode: {
                position: [19, 20],
            },
        },
        supportsSEPA: true
    },
    'FO': {
        name: 'Faroe Islands',
        ibanLength: 18,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 17],
            },
            nationalCode: {
                position: [17, 18],
            },
        },
        supportsSEPA: false
    },
    'FI': {
        name: 'Finland',
        ibanLength: 18,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 10],
            },
            accountNumber: {
                position: [10, 17],
            },
            nationalCode: {
                position: [17, 18],
            },
        },
        supportsSEPA: true
    },
    'FR': {
        name: 'France',
        ibanLength: 27,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 9],
            },
            branchCode: {
                position: [9, 14],
            },
            accountNumber: {
                position: [14, 25],
            },
            nationalCode: {
                position: [25, 27],
            },
        },
        supportsSEPA: true
    },
    'GE': {
        name: 'Georgia',
        ibanLength: 22,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 6],
            },
            accountNumber: {
                position: [6, 22],
            },
        },
        supportsSEPA: false
    },
    'DE': {
        name: 'Germany',
        ibanLength: 22,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 12],
            },
            accountNumber: {
                position: [12, 22],
            },
        },
        supportsSEPA: true
    },
    'GI': {
        name: 'Gibraltar',
        ibanLength: 23,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 23],
            },
        },
        supportsSEPA: false
    },
    'GR': {
        name: 'Greece',
        ibanLength: 27,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            branchCode: {
                position: [7, 11],
            },
            accountNumber: {
                position: [11, 27],
            },
        },
        supportsSEPA: true
    },
    'GL': {
        name: 'Greenland',
        ibanLength: 18,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 18],
            },
        },
        supportsSEPA: false
    },
    'GT': {
        name: 'Guatemala',
        ibanLength: 28,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 28],
            },
        },
        supportsSEPA: false
    },
    'HU': {
        name: 'Hungary',
        ibanLength: 28,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            branchCode: {
                position: [7, 11],
            },
            accountNumber: {
                position: [11, 27],
            },
            nationalCode: {
                position: [27, 28],
            },
        },
        supportsSEPA: true
    },
    'IS': {
        name: 'Iceland',
        ibanLength: 26,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            branchCode: {
                position: [8, 10],
            },
            accountNumber: {
                position: [10, 16],
            },
            identificationNumber: {
                position: [16, 26],
            },
        },
        supportsSEPA: true
    },
    'IE': {
        name: 'Ireland',
        ibanLength: 22,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            branchCode: {
                position: [8, 14],
            },
            accountNumber: {
                position: [14, 22],
            },
        },
        supportsSEPA: true
    },
    'IL': {
        name: 'Israel',
        ibanLength: 23,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            branchCode: {
                position: [7, 10],
            },
            accountNumber: {
                position: [10, 23],
            },
        },
        supportsSEPA: false
    },
    'IT': {
        name: 'Italy',
        ibanLength: 27,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            nationalCode: {
                position: [4, 5],
            },
            bankNumber: {
                position: [5, 10],
            },
            branchCode: {
                position: [10, 15],
            },
            accountNumber: {
                position: [15, 27],
            },
        },
        supportsSEPA: true
    },
    'JO': {
        name: 'Jordan',
        ibanLength: 30,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            branchCode: {
                position: [8, 12],
            },
            accountNumber: {
                position: [12, 30],
            },
        },
        supportsSEPA: false
    },
    'KZ': {
        name: 'Kazakhstan',
        ibanLength: 20,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            accountNumber: {
                position: [7, 20],
            },
        },
        supportsSEPA: false
    },
    'XK': {
        name: 'Kosovo',
        ibanLength: 20,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 6],
            },
            branchCode: {
                position: [6, 8],
            },
            accountNumber: {
                position: [8, 18],
            },
            nationalCode: {
                position: [18, 20],
            },
        },
        supportsSEPA: false
    },
    'KW': {
        name: 'Kuwait',
        ibanLength: 30,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 30],
            },
        },
        supportsSEPA: false
    },                                      
    'LV': {
        name: 'Latvia',
        ibanLength: 21,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 21],
            },
        },
        supportsSEPA: true
    },
    'LB': {
        name: 'Lebanon',
        ibanLength: 28,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 28],
            },
        },
        supportsSEPA: false
    },
    'LI': {
        name: 'Liechtenstein',
        ibanLength: 21,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 9],
            },
            accountNumber: {
                position: [9, 21],
            },
        },
        supportsSEPA: true
    },
    'LT': {
        name: 'Lithuania',
        ibanLength: 20,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 9],
            },
            accountNumber: {
                position: [9, 20],
            },
        },
        supportsSEPA: true
    },
    'LU': {
        name: 'Luxembourg',
        ibanLength: 20,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            accountNumber: {
                position: [7, 20],
            },
        },
        supportsSEPA: true
    },
    'MK': {
        name: 'North Macedonia',
        ibanLength: 19,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            accountNumber: {
                position: [7, 17],
            },
            nationalCode: {
                position: [17, 19],
            },
        },
        supportsSEPA: false
    },
    'MT': {
        name: 'Malta',
        ibanLength: 31,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            branchCode: {
                position: [8, 13],
            },
            accountNumber: {
                position: [13, 31],
            },
        },
        supportsSEPA: true
    },
    'MR': {
        name: 'Mauritania',
        ibanLength: 27,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 9],
            },
            branchCode: {
                position: [9, 14],
            },
            accountNumber: {
                position: [14, 25],
            },
            nationalCode: {
                position: [25, 27],
            },
        },
        supportsSEPA: false
    },
    'MC': {
        name: 'Monaco',
        ibanLength: 27,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 9],
            },
            branchCode: {
                position: [9, 14],
            },
            accountNumber: {
                position: [14, 25],
            },
            nationalCode: {
                position: [25, 27],
            },
        },
        supportsSEPA: true
    },
    'ME': {
        name: 'Montenegro',
        ibanLength: 22,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            accountNumber: {
                position: [7, 20],
            },
            nationalCode: {
                position: [20, 22],
            },
        },
        supportsSEPA: false
    },
    'NL': {
        name: 'Netherlands',
        ibanLength: 18,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 18],
            },
        },
        supportsSEPA: true
    },
    'NO': {
        name: 'Norway',
        ibanLength: 15,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 14],
            },
            nationalCode: {
                position: [14, 15],
            },
        },
        supportsSEPA: true
    },
    'PK': {
        name: 'Pakistan',
        ibanLength: 24,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 24],
            },
        },
        supportsSEPA: false
    },
    'PS': {
        name: 'Palestine',
        ibanLength: 29,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 29],
            },
        },
        supportsSEPA: false
    },
    'PL': {
        name: 'Poland',
        ibanLength: 28,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            branchCode: {
                position: [7, 11],
            },
            nationalCode: {
                position: [11, 12],
            },
            accountNumber: {
                position: [12, 28],
            },
        },
        supportsSEPA: true
    },
    'PT': {
        name: 'Portugal',
        ibanLength: 25,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            branchCode: {
                position: [8, 12],
            },
            accountNumber: {
                position: [12, 23],
            },
            nationalCode: {
                position: [23, 25],
            },
        },
        supportsSEPA: true
    },
    'QA': {
        name: 'Qatar',
        ibanLength: 29,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 29],
            },
        },
        supportsSEPA: false
    },
    'MD': {
        name: 'Republic of Moldova',
        ibanLength: 24, // Total IBAN length for the Republic of Moldova
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 6],
            },
            accountNumber: {
                position: [6, 24],
            },
        },
        supportsSEPA: false // The Republic of Moldova does not support SEPA
    },
    'RO': {
        name: 'Romania',
        ibanLength: 24,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 24],
            },
        },
        supportsSEPA: true
    },
    'SM': {
        name: 'San Marino',
        ibanLength: 27,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            nationalCode: {
                position: [4, 5],
            },
            bankNumber: {
                position: [5, 10],
            },
            branchCode: {
                position: [10, 15],
            },
            accountNumber: {
                position: [15, 27],
            },
        },
        supportsSEPA: false
    },
    'SA': {
        name: 'Saudi Arabia',
        ibanLength: 24,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 6],
            },
            accountNumber: {
                position: [6, 24],
            },
        },
        supportsSEPA: false
    },
    'RS': {
        name: 'Serbia',
        ibanLength: 22,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            accountNumber: {
                position: [7, 20],
            },
            nationalCode: {
                position: [20, 22],
            },
        },
        supportsSEPA: false
    },
    'SK': {
        name: 'Slovakia',
        ibanLength: 24,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 24],
            },
        },
        supportsSEPA: true
    },
    'SI': {
        name: 'Slovenia',
        ibanLength: 19,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 6],
            },
            branchCode: {
                position: [6, 9],
            },
            accountNumber: {
                position: [9, 17],
            },
            nationalCode: {
                position: [17, 19],
            },
        },
        supportsSEPA: true
    },
    'ES': {
        name: 'Spain',
        ibanLength: 24,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            branchCode: {
                position: [8, 12],
            },
            nationalCode: {
                position: [12, 14],
            },
            accountNumber: {
                position: [14, 24],
            },
        },
        supportsSEPA: true,
    },
    'SE': {
        name: 'Sweden',
        ibanLength: 24,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            accountNumber: {
                position: [7, 24],
            },
        },
        supportsSEPA: true
    },
    'CH': {
        name: 'Switzerland',
        ibanLength: 21,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 9],
            },
            accountNumber: {
                position: [9, 21],
            },
        },
        supportsSEPA: true
    },
    'TL': {
        name: 'Timor-Leste',
        ibanLength: 23,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            accountNumber: {
                position: [7, 21],
            },
            nationalCode: {
                position: [21, 23],
            },
        },
        supportsSEPA: false
    },
    'TR': {
        name: 'Turkey',
        ibanLength: 26,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 9],
            },
            nationalCode: {
                position: [9, 10],
            },
            accountNumber: {
                position: [10, 26],
            },
        },
        supportsSEPA: true,
    },
    'UA': {
        name: 'Ukraine',
        ibanLength: 29,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 10],
            },
            accountNumber: {
                position: [10, 29],
            },
        },
        supportsSEPA: false
    },
    'AE': {
        name: 'United Arab Emirates',
        ibanLength: 23,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            accountNumber: {
                position: [7, 23],
            },
        },
        supportsSEPA: false
    },
    'GB': {
        name: 'United Kingdom',
        ibanLength: 22,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            sortCode: {
                position: [8, 14],
            },
            accountNumber: {
                position: [14, 22],
            },
        },
        supportsSEPA: true
    },
    'VA': {
        name: 'Vatican',
        ibanLength: 22,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 7],
            },
            accountNumber: {
                position: [7, 22],
            },
        },
        supportsSEPA: false
    },
    'VG': {
        name: 'British Virgin Islands',
        ibanLength: 24,
        ibanStructure: {
            countryCode: {
                position: [0, 2],
            },
            checkSumDigits: {
                position: [2, 4],
            },
            bankNumber: {
                position: [4, 8],
            },
            accountNumber: {
                position: [8, 24],
            },
        },
        supportsSEPA: false
    },
    // Add more countries
};

export default countries;
