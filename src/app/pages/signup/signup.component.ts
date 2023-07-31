import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userService:UserService, private snack: MatSnackBar){}

  public user = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  };

  formSubmit()
  {
      console.log(this.user);
      if(this.user.username=='')
      {
        this.snack.open("Username is required", 'OK', {
          duration:3000,
          verticalPosition:'top',

        });
        return;
      }

      //validation

      //add user /user
      this.userService.addUser(this.user).subscribe(
        (data)=>{
            console.log(data);
            alert('success');
        },
        (error)=>{
          console.log(error)
          alert("oops");
        }
      );
  }


}
