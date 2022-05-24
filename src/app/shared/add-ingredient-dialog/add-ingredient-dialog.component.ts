import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Ingredient from 'src/app/models/Ingredient';

@Component({
  selector: 'app-add-ingredient-dialog',
  templateUrl: './add-ingredient-dialog.component.html',
  styleUrls: ['./add-ingredient-dialog.component.scss']
})
export class AddIngredientDialogComponent implements OnInit {

  newIngredientFormGroup !: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddIngredientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ingredient,
  ) { }

  ngOnInit(): void {
    this.newIngredientFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddIngredientClick(): void {
    if (this.newIngredientFormGroup.valid) {
      const newIngredient: Ingredient = {
        Name: this.newIngredientFormGroup.get('name')!.value,
        Quantity: this.newIngredientFormGroup.get('quantity')!.value
      }

      this.dialogRef.close(newIngredient);
    }
  }
}
