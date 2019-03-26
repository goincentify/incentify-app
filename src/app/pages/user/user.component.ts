import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from '@app/models/user.model';
// import { UserService } from '@app/service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@app/core';
import { UserService } from '@app/service';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns = ['id', 'username', 'salary', 'age'];
  dataSource = new MatTableDataSource<User>();
  currentUser: User;

  constructor(private userService: UserService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.currentUser = data.user;
    });
  } 

  signout() {
    this.authService.logout();
  }

}

