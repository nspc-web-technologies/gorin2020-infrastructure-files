"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slovak = void 0;
exports.Slovak = {
    weekdays: {
        shorthand: ['Ned', 'Pon', 'Ut', 'Str', 'Štv', 'Pia', 'Sob'],
        longhand: [
            'Nedeľa',
            'Pondelok',
            'Utorok',
            'Streda',
            'Štvrtok',
            'Piatok',
            'Sobota',
        ],
    },
    months: {
        shorthand: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'Máj',
            'Jún',
            'Júl',
            'Aug',
            'Sep',
            'Okt',
            'Nov',
            'Dec',
        ],
        longhand: [
            'Január',
            'Február',
            'Marec',
            'Apríl',
            'Máj',
            'Jún',
            'Júl',
            'August',
            'September',
            'Október',
            'November',
            'December',
        ],
    },
    firstDayOfWeek: 1,
    rangeSeparator: ' do ',
    time24hr: true,
    ordinal() {
        return '.';
    },
};
exports.default = exports.Slovak;