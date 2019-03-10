import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService, TokenStorage } from '@app/core';
import { UserService } from '@app/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, public dialog: MatDialog, private authService: AuthService, private token: TokenStorage, private userService: UserService) {
  }

  username: string;
  password: string;

  login(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.userService.setCurrentUser(this.username);
        this.router.navigate(['user']);
      }
    );
  }

}
