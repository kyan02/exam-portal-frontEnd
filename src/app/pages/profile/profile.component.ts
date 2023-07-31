import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    user:any;
    constructor(private login: LoginService) {}

    ngOnInit(): void{
       this.login.getCurrentUser().subscribe(
        (user:any) => {
          this.user = user
        },
        (error) => {
          alert("OOPS SOMETHING WENT WRONG");
        }
       )
    }
}
