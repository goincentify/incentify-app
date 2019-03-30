import { OrderItem, RewardItem } from "./reward-item";

export interface User {

  id: number;
  username: string;
  // salary: number; Is this field needed?
  // age: number; Is this field needed? Test data doesn't have it

  password: string;
  firstName: string;
  lastName: string;
  email: string;
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
  cartId: number;
  orders?: OrderItem[];
}
