import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/shared/models/category.models';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  title: string

  constructor(
    public dialogRef: MatDialogRef<Category>,
    @Inject(MAT_DIALOG_DATA) public data: Category
  ) { }

  ngOnInit(): void {
    // this.dialogRef.close();
   
    
  }

}
