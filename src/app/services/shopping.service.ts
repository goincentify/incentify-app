import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { MEMORY } from '@app/constants';
import { OrderItem, RewardItem } from '@app/models/reward-item';
import {User} from '@app/models/user.model';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService implements OnDestroy {

  orders: OrderItem[];

  currentUser: User;
  currentUserSubscription: Subscription;

  private itemsSource: BehaviorSubject<RewardItem[]>;
  public itemsList: Observable<RewardItem[]>;

  private cartSource: BehaviorSubject<RewardItem[]>;
  public cartList: Observable<RewardItem[]>;

  private cartCountSource = new BehaviorSubject(0);
  cartCount = this.cartCountSource.asObservable();

  private totalCostSource: BehaviorSubject<number>;
  public totalCost: Observable<number>;

  private ordersSource: BehaviorSubject<OrderItem[]>;
  public ordersList: Observable<OrderItem[]>;

  // Not Ported Yet

  private messageSource = new BehaviorSubject('alphasort');
  currentSort = this.messageSource.asObservable();

  //CONSTRUCT

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    this.currentUserSubscription = authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.createObservables();
    });
    // this.createObservables();
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  getRewards() {
    return this.http.get<string>(`${environment.apiUrl}/rewards/all`);
  }

  getCart() {
    return this.http.get<string>(`${environment.apiUrl}/cart/all`);
  }

  getOrders() {
    return this.http.get<string>(`${environment.apiUrl}/orders/all`);
  }

  getCartCost() {
    var totalCost: number = 0;
    this.cartList.subscribe(cart => {
      cart.forEach(item => {
        totalCost += item.price;
      })
    });
    return totalCost;
  }

  addToCart(itemId) {
    this.http.post<any>(`${environment.apiUrl}/cart/add`, itemId).pipe(first()).subscribe(
      resp => {
        this.cartSource.next(resp.cart);
        this.cartCountSource.next(resp.cart.length);
        this.itemsSource.next(resp.rewards);
        this.totalCostSource.next(resp.totalCost);
      },
      error => { console.log("Error in addToCart endpoint"); }
    );
  }

  public removeFromCart(itemId) {

    this.http.post<any>(`${environment.apiUrl}/cart/remove`, itemId).pipe(first()).subscribe(
      resp => {
        this.cartSource.next(resp.cart);
        this.cartCountSource.next(resp.cart.length);
        this.itemsSource.next(resp.rewards);
        this.totalCostSource.next(resp.totalCost);
      },
      error => { console.log("Error in removeFromCart endpoint"); }
    );
  }

  public redeemCart() {
    this.http.get<any>(`${environment.apiUrl}/cart/redeem`).pipe(first()).subscribe(
      resp => {
        this.cartSource.next(resp.cart);
        this.cartCountSource.next(resp.cart.length);
        this.itemsSource.next(resp.rewards);
        this.totalCostSource.next(resp.cost);
        this.ordersSource.next(resp.orders);
        this.authenticationService.updateUser();
      },
      error => { console.log("Error in redeemCart en``dpoint"); }
    );
  }

  changeSort(sortType: string) {
    this.messageSource.next(sortType);
  }

  createObservables() {

    this.itemsSource = new BehaviorSubject(JSON.parse(localStorage.getItem(MEMORY.rewards)));
    this.itemsList = this.itemsSource.asObservable();

    if (this.currentUser) {
      this.ordersSource = new BehaviorSubject(this.currentUser.orders);
      this.ordersList = this.ordersSource.asObservable();

      this.cartSource = new BehaviorSubject(this.currentUser.cart);
      this.cartList = this.cartSource.asObservable();

      this.cartCountSource = new BehaviorSubject(this.currentUser.cart.length);
      this.cartCount = this.cartCountSource.asObservable();

      this.ordersSource = new BehaviorSubject(this.currentUser.orders);
      this.ordersList = this.ordersSource.asObservable();

      this.totalCostSource = new BehaviorSubject(this.getCartCost());
      this.totalCost = this.totalCostSource.asObservable();
    }
  }

}

const cartColumns: string[] = ["name", "price"];
