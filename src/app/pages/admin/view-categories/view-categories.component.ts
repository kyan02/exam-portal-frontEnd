import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent {
  categories: any;

  constructor(private snack: MatSnackBar, private _category:CategoryService) {}

  ngOnInit(): void {

    this._category.categories().subscribe((data:any) =>{
      this.categories = data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error);
      this.snack.open('Invalid Details !! Try Again','',{
        duration: 3000,
      });
    });
  }
}
