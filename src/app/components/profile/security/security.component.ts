import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '@app/dialogs';
import { UserService } from '@app/service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { User } from '@app/models';
import { AuthService } from '@app/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  matcher = new MyErrorStateMatcher();

  passwordForm: FormGroup;

  // currentUser: User;
  // currentUserSubscription: Subscription;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private authenticationService: AuthService) {
    this.passwordForm = this.formBuilder.group({
      oldPass: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords })
  }

  ngOnInit() {
    // this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => { this.currentUser = user });
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  passwordSubmit() {

    alert("Security changes not yet allowed.");
    this.passwordForm.reset();
    this.passwordForm.markAsPristine();


    // let current = this.currentUser.password;
    // let old = this.passwordForm.controls.oldPass.value;

    // if (old != current) {
    //   this.passwordForm.setErrors({ notOld: true });
    //   console.log("error set");
    //   return;
    // } else {
    //   this.passwordForm.setErrors({ notOld: false });
    // }

    // if (!this.passwordForm.hasError('notSame') && this.passwordForm.get("password") && !this.passwordForm.hasError("notOld")) {
    //   this.userService.updatePassword(this.currentUser.id, this.passwordForm.get("password").value).pipe(first()).subscribe(
    //     data => {
    //       this.passwordForm.reset();
    //       this.passwordForm.markAsPristine();
    //       alert("Password updated.");
    //     },
    //     error => {
    //       console.log("ERROR: " + error);
    //     }
    //   );
    // }
  }

}
