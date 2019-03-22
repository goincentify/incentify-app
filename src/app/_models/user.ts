import { OrderItem, RewardItem } from "./reward-item";

export class User {
    id: number = 1;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    token: string = "jwt-fake-token";
    job?: string;
    tier?: string;
    bio?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: number;
    interests?: string;
    picture?: string;
    points?: number;
    totaldays?: number;
    totaldays_percentile?: number;
    ontimedays?: number;
    ontimepercent_percentile?: number;
    daystreak?: number;
    daystreak_percentile?: number;
    cart?: RewardItem[];
    orders?: OrderItem[];
};

export const Lennon: User = {
    id: 1,
    username: "lennon",
    password: "password",
    firstName: "John",
    lastName: "Lennon",
    email: "john.lennon@perks4me.com",
    token: 'fake-jwt-token',
    job: "Employee",
    tier: "Gold",
    bio: "One of the Beatles.",
    interests: "Guitar, Singing",
    picture: "assets/img/profiles/lennon.jpg",
    points: 8700,
    totaldays: 57,
    totaldays_percentile: 67,
    ontimedays: 39,
    ontimepercent_percentile: 84,
    daystreak: 16,
    daystreak_percentile: 72,
    cart: [
        {
            id: 9,
            name: "$100 Airline Voucher",
            price: 5000,
            category: "Gift Card",
            description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
                "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
            tags: ["Voucher", "Gift Card", "Travel", "Flight", "Vacation Packages"],
            image: "/assets/img/rewards/airline.jpg",
            incart: true
        },
        {
            id: 4,
            name: "VISA Gift Card",
            price: 2500,
            category: "Gift Card",
            description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
                "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
            tags: ["Gift Card", "Shopping", "VISA"],
            image: "/assets/img/rewards/VISA.jpg",
            incart: true
        },
        {
            id: 16,
            name: "Grocery Gift Card",
            price: 5000,
            category: "Gift Card",
            description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
                "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
            tags: ["Gift Card", "Shopping", "Food", "Grocery", "Groceries"],
            image: "../../../assets/img/rewards/tjs.jpg",
            incart: true
        }
    ],
    orders: [
        {
            id: 1,
            name: "VISA Gift Card",
            price: 25000,
            date: "01/17/2018"
        }, {
            id: 2,
            name: "12-Month Gym Membership",
            price: 30000,
            date: "08/07/2018"
        },
        {
            id: 3,
            name: "Grocery Gift Card",
            price: 2500,
            date: "12/31/2018"
        }
    ]
};

export const McCartney: User = {
    id: 2,
    username: "mccartney",
    password: "password",
    firstName: "Paul",
    lastName: "McCartney",
    email: "paul.mccartney@perks4me.com",
    token: 'fake-jwt-token',
    job: "Employee",
    tier: "Gold",
    bio: "One of the Beatles.",
    interests: "Guitar, Singing",
    picture: "assets/img/profiles/mccartney.jpeg",
    points: 1400,
    totaldays: 97,
    totaldays_percentile: 74,
    ontimedays: 92,
    ontimepercent_percentile: 91,
    daystreak: 31,
    daystreak_percentile: 88,
    cart: [
        {
            id: 9,
            name: "$100 Airline Voucher",
            price: 5000,
            category: "Gift Card",
            description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
                "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
            tags: ["Voucher", "Gift Card", "Travel", "Flight", "Vacation Packages"],
            image: "/assets/img/rewards/airline.jpg",
            incart: true
        },
        {
            id: 4,
            name: "VISA Gift Card",
            price: 2500,
            category: "Gift Card",
            description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
                "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
            tags: ["Gift Card", "Shopping", "VISA"],
            image: "/assets/img/rewards/VISA.jpg",
            incart: true
        },
        {
            id: 16,
            name: "Grocery Gift Card",
            price: 5000,
            category: "Gift Card",
            description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
                "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
            tags: ["Gift Card", "Shopping", "Food", "Grocery", "Groceries"],
            image: "../../../assets/img/rewards/tjs.jpg",
            incart: true
        }
    ],
    orders: [
        {
            id: 1,
            name: "VISA Gift Card",
            price: 25000,
            date: "01/17/2018"
        }, {
            id: 2,
            name: "12-Month Gym Membership",
            price: 30000,
            date: "08/07/2018"
        },
        {
            id: 3,
            name: "Grocery Gift Card",
            price: 2500,
            date: "12/31/2018"
        }
    ]
};

export const users: User[] = [Lennon, McCartney];
