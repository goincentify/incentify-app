import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from '@app/models/user.model';
import { UserService } from '@app/service';
import { Router } from '@angular/router';
import { AuthService } from '@app/core';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns = ['id', 'username', 'salary', 'age'];
  dataSource = new MatTableDataSource<User>();
  currentUser: User;

  constructor(private router: Router, private authService: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {

    // this.userService.currentUser.subscribe(user => {
    //   this.currentUser = user;
    //   console.log(this.currentUser);
    // });

    this.userService.getUsers().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
  }

  signout() {
    this.authService.logout();
  }

}

