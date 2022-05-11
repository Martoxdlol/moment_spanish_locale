declare const localeData: {
    months: string[];
    monthsShort: string[];
    monthsParseExact: boolean;
    weekdays: string[];
    weekdaysShort: string[];
    weekdaysMin: string[];
    weekdaysParseExact: boolean;
    longDateFormat: {
        LT: string;
        LTS: string;
        L: string;
        LL: string;
        LLL: string;
        LLLL: string;
    };
    calendar: {
        sameDay: string;
        nextDay: string;
        nextWeek: string;
        lastDay: string;
        lastWeek: string;
        sameElse: string;
    };
    relativeTime: {
        future: string;
        past: string;
        s: string;
        m: string;
        mm: string;
        h: string;
        hh: string;
        d: string;
        dd: string;
        M: string;
        MM: string;
        y: string;
        yy: string;
    };
    dayOfMonthOrdinalParse: RegExp;
    ordinal: (number: any) => string;
    meridiemParse: RegExp;
    isPM: (input: any) => boolean;
    meridiem: (hours: any, minutes: any, isLower: any) => "PD" | "MD";
    week: {
        dow: number;
        doy: number;
    };
};
declare function addEsLocaleToMoment(moment: any): void;
export { localeData, addEsLocaleToMoment, };
