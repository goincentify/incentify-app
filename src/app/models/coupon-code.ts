export class CouponCode {
    name: string;
    redeemedBy: number[];
    expires: string;
    value: number;
}

export const couponCodes = [
    {
        name: "TOPSALES",
        redeemedBy: [],
        expires: "01/01/2020",
        value: 3000
    },
    {
        name: "WELLDONE",
        redeemedBy: [],
        expires: "01/01/2020",
        value: 1000
    },
    {
        name: "GOODJOB",
        redeemedBy: [],
        expires: "01/01/2020",
        value: 500
    }
]