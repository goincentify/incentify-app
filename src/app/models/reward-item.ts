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