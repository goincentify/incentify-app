export class RewardItem {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    tags: string[];
    image: string;
    incart: boolean = false;
}

export interface OrderItem {
    id: number;
    name: string;
    price: number;
    date: string;
}

export const CartColumns = { columns: ["name", "price"] }

export const RewardItems = [
    {
        id: 1,
        name: "Weekend Getaway - New York",
        price: 60000,
        category: "Vacation",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Vacation", "Travel", "New York", "Flight", "Vacation Packages"],
        image: '/assets/img/rewards/weekend1.jpg',
        incart: false
    },
    {
        id: 2,
        name: "Weekend Getaway - Minneapolis",
        price: 60000,
        category: "Vacation",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Vacation", "Travel", "Minneapolis", "Flight", "Vacation Packages"],
        image: "/assets/img/rewards/weekend2.jpg",
        incart: false
    },
    {
        id: 3,
        name: "Weekend Getaway - Boston",
        price: 60000,
        category: "Vacation",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Vacation", "Travel", "Boston", "Flight", "Vacation Packages"],
        image: "/assets/img/rewards/weekend3.jpg",
        incart: false
    },
    {
        id: 4,
        name: "$5 Amazon",
        price: 250,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Shopping", "Amazon"],
        image: "/assets/img/rewards/amazon.jpeg",
        incart: false
    },
    {
        id: 5,
        name: "$10 Amazon",
        price: 500,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Shopping", "Amazon"],
        image: "/assets/img/rewards/amazon.jpeg",
        incart: false
    },
    {
        id: 6,
        name: "$20 Amazon",
        price: 1000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Shopping", "Amazon"],
        image: "/assets/img/rewards/amazon.jpeg",
        incart: false
    },
    {
        id: 7,
        name: "1-Night Hotel Stay",
        price: 10000,
        category: "Voucher",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Voucher", "Travel", "Hotel", "Vacation Packages"],
        image: "/assets/img/rewards/hotel.jpg",
        incart: false
    },
    {
        id: 8,
        name: "2-Night Hotel Stay",
        price: 20000,
        category: "Voucher",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Voucher", "Travel", "Hotel", "Vacation Packages"],
        image: "/assets/img/rewards/hotel.jpg",
        incart: false
    },
    {
        id: 9,
        name: "$100 Airline Voucher",
        price: 5000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Voucher", "Travel", "Flight", "Vacation Packages"],
        image: "/assets/img/rewards/airline.jpg",
        incart: false
    },
    {
        id: 10,
        name: "$200 Airline Voucher",
        price: 10000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Voucher", "Travel", "Flight", "Vacation Packages"],
        image: "/assets/img/rewards/airline.jpg",
        incart: false
    },
    {
        id: 11,
        name: "3-Month Gym Membership",
        price: 7500,
        category: "Fitness",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Fitness", "Gym", "Membership", "Workout", "Gym Membership"],
        image: "/assets/img/rewards/gym.jpg",
        incart: false
    },
    {
        id: 12,
        name: "6-Month Gym Membership",
        price: 15000,
        category: "Fitness",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Fitness", "Gym", "Membership", "Workout", "Gym Membership"],
        image: '/assets/img/rewards/gym.jpg',
        incart: false
    },
    {
        id: 13,
        name: "9-Month Gym Membership",
        price: 22500,
        category: "Fitness",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Fitness", "Gym", "Membership", "Workout", "Gym Membership"],
        image: "/assets/img/rewards/gym.jpg",
        incart: false
    },
    {
        id: 14,
        name: "12-Month Gym Membership",
        price: 30000,
        category: "Fitness",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Fitness", "Gym", "Membership", "Workout", "Gym Membership"],
        image: "/assets/img/rewards/gym.jpg",
        incart: false
    },
    {
        id: 15,
        name: "$5 Trader Joes",
        price: 250,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Shopping", "Food", "Grocery", "Groceries"],
        image: "../../../assets/img/rewards/tjs.jpg",
        incart: false
    },
    {
        id: 16,
        name: "$10 Trader Joes",
        price: 500,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Shopping", "Food", "Grocery", "Groceries"],
        image: "../../../assets/img/rewards/tjs.jpg",
        incart: false
    },
    {
        id: 17,
        name: "$20 Trader Joes",
        price: 1000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Shopping", "Food", "Grocery", "Groceries"],
        image: "../../../assets/img/rewards/tjs.jpg",
        incart: false
    },
    {
        id: 18,
        name: "$5 Walmart",
        price: 250,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Shopping", "Food", "Walmart", "Everyday", "Items"],
        image: "../../../assets/img/rewards/walmart.jpg",
        incart: false
    },
    {
        id: 19,
        name: "$10 Walmart",
        price: 500,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Shopping", "Food", "Walmart", "Everyday", "Items"],
        image: "../../../assets/img/rewards/walmart.jpg",
        incart: false
    },
    {
        id: 20,
        name: "$20 Walmart",
        price: 1000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Shopping", "Food", "Walmart", "Everyday", "Items"],
        image: "/assets/img/rewards/walmart.jpg",
        incart: false
    },
    {
        id: 21,
        name: "$5 BP Gas",
        price: 250,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Shopping", "Travel", "Gasoline", "Gas"],
        image: "../../../assets/img/rewards/bp.jpg",
        incart: false
    },
    {
        id: 22,
        name: "$10 BP Gas",
        price: 500,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Shopping", "Travel", "Gasoline", "Gas"],
        image: "../../../assets/img/rewards/bp.jpg",
        incart: false
    },
    {
        id: 23,
        name: "$20 BP Gas",
        price: 1000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Shopping", "Travel", "Gasoline", "Gas"],
        image: "../../../assets/img/rewards/bp.jpg",
        incart: false
    },
    {
        id: 24,
        name: "One-Month Free Metro Card",
        price: 4250,
        category: "Voucher",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Travel", "Commuting", "Voucher", "Public Transport"],
        image: "../../../assets/img/rewards/metro.jpg",
        incart: false
    },
    {
        id: 25,
        name: "Apple iPad Mini 4",
        price: 22500,
        category: "Electronics",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Apple", "Tablet", "Electronics", "Computer", "Mobile", "iPad"],
        image: '../../../assets/img/rewards/ipad-mini-4.jpeg',
        incart: false
    },
    {
        id: 26,
        name: "Apple iPad",
        price: 17500,
        category: "Electronics",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Apple", "Tablet", "Electronics", "Computer", "Mobile", "iPad"],
        image: '../../../assets/img/rewards/ipad-ipad.jpeg',
        incart: false
    },
    {
        id: 27,
        name: "10.5-inch Apple iPad Pro",
        price: 33750,
        category: "Electronics",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Apple", "Tablet", "Electronics", "Computer", "Mobile", "iPad"],
        image: '../../../assets/img/rewards/ipad-pro-10in.jpeg',
        incart: false
    },
    {
        id: 28,
        name: "11-inch Apple iPad Pro",
        price: 42500,
        category: "Electronics",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Apple", "Tablet", "Electronics", "Computer", "Mobile", "iPad"],
        image: '../../../assets/img/rewards/ipad-pro-11in.jpeg',
        incart: false
    },
    {
        id: 29,
        name: "12.9-inch Apple iPad Pro",
        price: 55000,
        category: "Electronics",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Apple", "Tablet", "Electronics", "Computer", "Mobile", "iPad"],
        image: '../../../assets/img/rewards/ipad-pro-12in.jpeg',
        incart: false
    },
    {
        id: 30,
        name: "Apple Watch Series 4",
        price: 21250,
        category: "Electronics",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Apple", "Tablet", "Electronics", "Computer", "Mobile", "Watch"],
        image: '../../../assets/img/rewards/watch-s4.jpeg',
        incart: false
    },
    {
        id: 53,
        name: "Apple Watch Series 3",
        price: 20200,
        category: "Electronics",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Apple", "Tablet", "Electronics", "Computer", "Mobile", "Watch"],
        image: '../../../assets/img/rewards/watch-s3.jpg',
        incart: false
    },
    {
        id: 31,
        name: "Fitbit Charge 3",
        price: 7000,
        category: "Electronics",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Fitbit", "Electronics", "Computer", "Mobile", "Watch"],
        image: '../../../assets/img/rewards/fitbit-charge3.png',
        incart: false
    },
    {
        id: 32,
        name: "Fitbit Flex 2",
        price: 2750,
        category: "Electronics",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Fitbit", "Electronics", "Computer", "Mobile", "Watch"],
        image: '../../../assets/img/rewards/fitbit-flex2.jpg',
        incart: false
    },
    {
        id: 33,
        name: "Fitbit Versa",
        price: 11000,
        category: "Electronics",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Fitbit", "Electronics", "Computer", "Mobile", "Watch"],
        image: '../../../assets/img/rewards/fitbit-versa.png',
        incart: false
    },
    {
        id: 34,
        name: "Fitbit Ionic",
        price: 9500,
        category: "Electronics",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Fitbit", "Electronics", "Computer", "Mobile", "Watch"],
        image: '../../../assets/img/rewards/fitbit-ionic.png',
        incart: false
    },
    {
        id: 35,
        name: "$5 Dunkin Donuts",
        price: 275,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Dunkin Donuts", "Coffee", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/dunkin.jpg',
        incart: false
    },
    {
        id: 36,
        name: "$10 Dunkin Donuts",
        price: 550,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Dunkin Donuts", "Coffee", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/dunkin.jpg',
        incart: false
    },
    {
        id: 37,
        name: "$20 Dunkin Donuts",
        price: 1000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Dunkin Donuts", "Coffee", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/dunkin.jpg',
        incart: false
    },
    {
        id: 38,
        name: "$5 Starbucks",
        price: 275,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Coffee", "Starbucks", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/starbucks.png',
        incart: false
    },
    {
        id: 39,
        name: "$10 Starbucks",
        price: 550,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Coffee", "Starbucks", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/starbucks.png',
        incart: false
    },
    {
        id: 40,
        name: "$20 Starbucks",
        price: 1000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Coffee", "Starbucks", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/starbucks.png',
        incart: false
    },
    {
        id: 41,
        name: "$5 Tim Hortons",
        price: 275,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Coffee", "Tim Hortons", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/tim-hortons.jpeg',
        incart: false
    },
    {
        id: 42,
        name: "$10 Tim Hortons",
        price: 550,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Coffee", "Tim Hortons", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/tim-hortons.jpeg',
        incart: false
    },
    {
        id: 43,
        name: "$20 Tim Hortons",
        price: 1000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Coffee", "Tim Hortons", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/tim-hortons.jpeg',
        incart: false
    },
    {
        id: 44,
        name: "$5 McDonalds",
        price: 275,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Burgers", "Fries", "McDonalds", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/mcdonalds.jpg',
        incart: false
    },
    {
        id: 45,
        name: "$10 McDonalds",
        price: 550,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Burgers", "Fries", "McDonalds", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/mcdonalds.jpg',
        incart: false
    },
    {
        id: 46,
        name: "$20 McDonalds",
        price: 1000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Burgers", "Fries", "McDonalds", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/mcdonalds.jpg',
        incart: false
    },
    {
        id: 47,
        name: "$5 Arby's",
        price: 275,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Sandwiches", "Fries", "Arby's", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/arbys.jpg',
        incart: false
    },
    {
        id: 48,
        name: "$10 Arby's",
        price: 550,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Sandwiches", "Fries", "Arby's", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/arbys.jpg',
        incart: false
    },
    {
        id: 49,
        name: "$20 Arby's",
        price: 1000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Sandwiches", "Fries", "Arby's", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/arbys.jpg',
        incart: false
    },
    {
        id: 50,
        name: "$5 Subway",
        price: 275,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Sandwiches", "Subway", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/subway.jpg',
        incart: false
    },
    {
        id: 51,
        name: "$10 Subway",
        price: 550,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Sandwiches", "Subway", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/subway.jpg',
        incart: false
    },
    {
        id: 52,
        name: "$20 Subway",
        price: 1000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Sandwiches", "Subway", "Gift Card", "Gift Cards", "Fast Food"],
        image: '../../../assets/img/rewards/subway.jpg',
        incart: false
    },
    {
        id: 54,
        name: "$5 Uber",
        price: 275,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Ride Sharing", "Travel", "Transportation", "Transport", "Car", "Uber", "Gift Card", "Gift Cards"],
        image: '../../../assets/img/rewards/uber.jpg',
        incart: false
    },
    {
        id: 55,
        name: "$10 Uber",
        price: 550,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Ride Sharing", "Travel", "Transportation", "Transport", "Car", "Uber", "Gift Card", "Gift Cards"],
        image: '../../../assets/img/rewards/uber.jpg',
        incart: false
    },
    {
        id: 56,
        name: "$20 Uber",
        price: 1000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Ride Sharing", "Travel", "Transportation", "Transport", "Car", "Uber", "Gift Card", "Gift Cards"],
        image: '../../../assets/img/rewards/uber.jpg',
        incart: false
    },
    {
        id: 57,
        name: "$5 Lyft",
        price: 250,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Ride Sharing", "Travel", "Transportation", "Transport", "Car", "Lyft", "Gift Card", "Gift Cards"],
        image: '../../../assets/img/rewards/lyft.png',
        incart: false
    },
    {
        id: 58,
        name: "$10 Lyft",
        price: 500,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Ride Sharing", "Travel", "Transportation", "Transport", "Car", "Lyft", "Gift Card", "Gift Cards"],
        image: '../../../assets/img/rewards/lyft.png',
        incart: false
    },
    {
        id: 59,
        name: "$20 Lyft",
        price: 1000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Ride Sharing", "Travel", "Transportation", "Transport", "Car", "Lyft", "Gift Card", "Gift Cards"],
        image: '../../../assets/img/rewards/lyft.png',
        incart: false
    },
    {
        id: 60,
        name: "$5 Holiday Gas",
        price: 250,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Holiday", "Car", "Transportation", "Transport", "Shopping", "Travel", "Gasoline", "Gas"],
        image: "../../../assets/img/rewards/holiday.jpeg",
        incart: false
    },
    {
        id: 61,
        name: "$10 Holiday Gas",
        price: 500,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Holiday", "Car", "Transportation", "Transport", "Shopping", "Travel", "Gasoline", "Gas"],
        image: "../../../assets/img/rewards/holiday.jpeg",
        incart: false
    },
    {
        id: 62,
        name: "$20 Holiday Gas",
        price: 1000,
        category: "Gift Card",
        description: "Lorem ipsum dolor sit amet, ne vis quem graeco consetetur, id eam doming admodum epicurei. " +
            "Mei tritani mandamus scriptorem cu, labore insolens platonem id eam.",
        tags: ["Gift Card", "Gift Cards", "Holiday", "Car", "Transportation", "Transport", "Shopping", "Travel", "Gasoline", "Gas"],
        image: "../../../assets/img/rewards/holiday.jpeg",
        incart: false
    }
]