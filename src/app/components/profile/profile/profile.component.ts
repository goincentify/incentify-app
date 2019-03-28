import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@app/service';
import { Subscription } from 'rxjs';
import { User } from '@app/models';
import { MyErrorStateMatcher } from '@app/components';
import { first } from 'rxjs/operators';
import { AuthService } from '@app/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(private route: ActivatedRoute, private authenticationService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.currentUserSubscription = this.route.data.subscribe(data => {
      this.currentUser = data.user;
    });

    this.profileForm = new FormGroup({
      firstName: new FormControl(this.currentUser.firstName, [Validators.required]),
      lastName: new FormControl(this.currentUser.lastName, [Validators.required]),
      email: new FormControl({ value: this.currentUser.email, disabled: 'true' }),
      address: new FormControl(this.currentUser.address),
      city: new FormControl(this.currentUser.city),
      state: new FormControl(this.currentUser.state),
      zip: new FormControl(this.currentUser.zip),
      bio: new FormControl(this.currentUser.bio),
      interest: new FormControl(this.currentUser.interests)
    });

  }

  // convenience getter for easy access to form fields
  get form() { return this.profileForm.controls; }

  // find in alert component
  matcher = new MyErrorStateMatcher();

  profileSubmit() {

    if (this.profileForm.status == "INVALID") {
      alert("Error in form.");
      return;
    }

    var updatedUser: User = this.currentUser;

    updatedUser.firstName = this.profileForm.get("firstName").value;
    updatedUser.lastName = this.profileForm.get("lastName").value;
    updatedUser.email = this.profileForm.get("email").value;
    updatedUser.address = this.profileForm.get("address").value;
    updatedUser.city = this.profileForm.get("city").value;
    updatedUser.state = this.profileForm.get("state").value;
    updatedUser.zip = this.profileForm.get("zip").value;
    updatedUser.bio = this.profileForm.get("bio").value;
    updatedUser.interests = this.profileForm.get("interest").value;

    // this.userService.update(updatedUser).pipe(first()).subscribe(
    //   data => { },
    //   error => {
    //     console.log("ERROR: " + error);
    //   }
    // );
  }

}

