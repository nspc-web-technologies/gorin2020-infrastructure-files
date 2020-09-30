"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estonian = void 0;
exports.Estonian = {
    weekdays: {
        shorthand: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
        longhand: [
            'Pühapäev',
            'Esmaspäev',
            'Teisipäev',
            'Kolmapäev',
            'Neljapäev',
            'Reede',
            'Laupäev',
        ],
    },
    months: {
        shorthand: [
            'Jaan',
            'Veebr',
            'Märts',
            'Apr',
            'Mai',
            'Juuni',
            'Juuli',
            'Aug',
            'Sept',
            'Okt',
            'Nov',
            'Dets',
        ],
        longhand: [
            'Jaanuar',
            'Veebruar',
            'Märts',
            'Aprill',
            'Mai',
            'Juuni',
            'Juuli',
            'August',
            'September',
            'Oktoober',
            'November',
            'Detsember',
        ],
    },
    firstDayOfWeek: 1,
    ordinal() {
        return '.';
    },
    weekAbbreviation: 'Näd',
    rangeSeparator: ' kuni ',
    time24hr: true,
};
exports.default = exports.Estonian;
