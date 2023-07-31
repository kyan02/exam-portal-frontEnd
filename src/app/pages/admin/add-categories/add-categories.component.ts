import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})

export class AddCategoriesComponent {
  
  category = {
    name: '',
    description: '',
  };

  constructor(private _category:CategoryService, private _snack:MatSnackBar) {}

  formSubmit(){
    if(this.category.name.trim()=='' || this.category.name==null){
      this._snack.open("Title required!!",'',{
        duration: 3000
      })
    }

    this._category.addCategory(this.category).subscribe(

      (data:any)=>{
        this.category.name='';
        this.category.description ='';
        alert("Sucess")},
      (error)=>{alert("Oops")}

    )
  }
}
