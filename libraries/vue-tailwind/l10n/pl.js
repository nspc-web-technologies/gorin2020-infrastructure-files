"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polish = void 0;
exports.Polish = {
    weekdays: {
        shorthand: ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So'],
        longhand: [
            'Niedziela',
            'Poniedziałek',
            'Wtorek',
            'Środa',
            'Czwartek',
            'Piątek',
            'Sobota',
        ],
    },
    months: {
        shorthand: [
            'Sty',
            'Lut',
            'Mar',
            'Kwi',
            'Maj',
            'Cze',
            'Lip',
            'Sie',
            'Wrz',
            'Paź',
            'Lis',
            'Gru',
        ],
        longhand: [
            'Styczeń',
            'Luty',
            'Marzec',
            'Kwiecień',
            'Maj',
            'Czerwiec',
            'Lipiec',
            'Sierpień',
            'Wrzesień',
            'Październik',
            'Listopad',
            'Grudzień',
        ],
    },
    rangeSeparator: ' do ',
    weekAbbreviation: 'tydz.',
    firstDayOfWeek: 1,
    time24hr: true,
    ordinal: () => '.',
};
exports.default = exports.Polish;
