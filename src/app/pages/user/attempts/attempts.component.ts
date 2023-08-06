import { Component } from '@angular/core';
import { AttemptsService } from 'src/app/services/attempts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent {

  attempts:any;
  constructor(private _attempts: AttemptsService) {}
  ngOnInit() : void {
    
    this._attempts.getAllAtempts().subscribe(
      (data)=>{
        this.attempts = data;
        console.log(this.attempts)
      },
      (error)=>{
        console.log(error);
        Swal.fire("Something went wrong")
      }
    )
  }
}
