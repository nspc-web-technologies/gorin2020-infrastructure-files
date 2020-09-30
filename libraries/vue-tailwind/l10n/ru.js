"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Russian = void 0;
exports.Russian = {
    weekdays: {
        shorthand: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        longhand: [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
        ],
    },
    months: {
        shorthand: [
            'Янв',
            'Фев',
            'Март',
            'Апр',
            'Май',
            'Июнь',
            'Июль',
            'Авг',
            'Сен',
            'Окт',
            'Ноя',
            'Дек',
        ],
        longhand: [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
        ],
    },
    firstDayOfWeek: 1,
    ordinal() {
        return '';
    },
    rangeSeparator: ' — ',
    weekAbbreviation: 'Нед.',
    amPM: ['ДП', 'ПП'],
    yearAriaLabel: 'Год',
    time24hr: true,
};
exports.default = exports.Russian;
