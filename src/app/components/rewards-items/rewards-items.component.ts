import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { MEMORY } from '@app/constants';
import { RewardInfoComponent } from '@app/dialogs';
import { ShoppingService } from '@app/service/shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rewards-items',
  templateUrl: './rewards-items.component.html',
  styleUrls: ['./rewards-items.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RewardsItemsComponent implements OnInit, OnDestroy {

  testValue;
  pointRatio = MEMORY.pointRatio;
  items;
  filteredItems;

  filter;
  filters;
  selectedTags = new Array<String>();
  search = '';

  sortType = {
    type: "Alpha",
    direction: "arrow_upward"
  };

  display = { value: "grid" };

  private shoppingSubscription: Subscription;

  constructor(private route: ActivatedRoute, private shoppingData: ShoppingService, public dialog: MatDialog, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.filters = FILTER_DATA;
    this.shoppingSubscription = this.route.data.subscribe(data => {
      this.items = data.items;
      if (this.search) {
        this.applyFilters()
      } else {
        this.filteredItems = data.items;
      }
    });

    this.activatedRoute.paramMap.subscribe(params => {
      var filter = params.keys ? params.get('filter') : '';
      if (filter) {
        this.search = filter;
        this.filteredItems = this.items.filter(item => {
          return this.itemContainsFilters(item);
        });
      }
    })
  }

  ngOnDestroy() {
    this.shoppingSubscription.unsubscribe();
  }

  openDetails(item): void {
    const dialogRef = this.dialog.open(RewardInfoComponent, {
      panelClass: 'no_padding-custom-dialog-container',
      width: '250px',
      data: item.id
    });
  }

  sort(sortType: string) {
    switch (sortType) {
      case "alphasort":
        this.sortType = {
          type: "Alpha",
          direction: "arrow_upward"
        };
        this.filteredItems.sort((a, b) => { return a.name.localeCompare(b.name) });
        return;
      case "pricesort":
        this.sortType = {
          type: "Price",
          direction: "arrow_downward"
        };
        this.filteredItems.sort((a, b) => { return a.price - b.price });
        return;
    }
  }

  // FILTER WORK

  //Checks if both search and tag filter applied. Filter by both if so, otherwise, filter by either.
  private itemContainsFilters(item) {
    if (this.search != "" && this.selectedTags.length > 0) {
      return this.itemContainsTags(item) && this.itemContainsSearch(item);
    }
    return this.itemContainsTags(item) || this.itemContainsSearch(item);

  }

  //Return TRUE if search in .name or .tags
  itemContainsSearch(item) {
    var name = item.name.toLowerCase();
    var search = this.search.toLowerCase();
    if (this.search != "" &&
      (name.includes(search) ||
        this.listContainsCaseInsensitive(item.tags, this.search))
    ) {
      return true;
    }
    return false;
  }

  // Return TRUE if item.tags contains tag in selectedTags
  private itemContainsTags(item) {
    var contains = false;
    this.selectedTags.forEach(tag => {
      if (this.listContainsCaseInsensitive(item.tags, tag)) {
        contains = true;
      }
    })
    return contains;
  }

  private listContainsCaseInsensitive(list, query) {
    var contains = false;
    list.forEach(str => {
      if (str.toLowerCase() == (query.toLowerCase())) {
        contains = true;
      }
    });
    return contains;
  }

  applyFilters() {
    if (this.search != "" || this.selectedTags.length > 0) {
      var list = this.items.filter(item => {
        return this.itemContainsFilters(item);
      });
      this.filteredItems = list;
    }
    else {
      this.filteredItems = this.items;
    }
  }

  tagClicked(tag) {
    if (!this.isSelected(tag)) {
      this.selectedTags.push(tag);
    } else {
      this.removeTag(tag);
    }
    this.applyFilters();
  }

  private isSelected(tag) {
    return (this.selectedTags.indexOf(tag) > -1);
  }

  removeTag(tag) {
    var tags = this.selectedTags.filter(function (item) {
      return item != tag;
    });
    this.selectedTags = tags;
    this.applyFilters();
  }

  clear() {
    this.router.navigate(['marketplace']);
  }

  keyDownFunction(event, search) {
    if (event.keyCode == 13) {
      this.applyFilters();
    }
  }
}

const FILTER_DATA = [
  {
    category: "Travel",
    tags: [
      'Flight',
      "Public Transport",
      "Vacation Packages",
      'Hotel'
    ]
  },
  {
    category: "Gift Cards",
    tags: [
      "Amazon",
      "Arby's",
      "Dunkin Donuts",
      "Grocery",
      "Gas",
      "McDonalds",
      "Subway",
      "Trader Joes",
      "Tim Hortons",
      "Walmart"
    ]
  },
  {
    category: "Fitness",
    tags: [
      "Gym Membership"
    ]
  },
  {
    category: "Electronics",
    tags: [
      "Watch",
      "Tablet",
      "Apple",
      "Fitbit",
    ]
  }
]