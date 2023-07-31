import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  categories:any;

  constructor(private _categories: CategoryService, private _snack : MatSnackBar){}

  ngOnInit(): void {

    this._categories.categories().subscribe(
      (data:any)=>{
        this.categories = data;
      },
      (error)=>{
        this._snack.open("Oops Something Went Wrong",'',{
          duration:3000
        })
      }
    )
  }
}
