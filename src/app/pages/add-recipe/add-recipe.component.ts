import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import Ingredient from 'src/app/models/Ingredient';
import { AddIngredientDialogComponent } from 'src/app/shared/add-ingredient-dialog/add-ingredient-dialog.component';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class AddRecipeComponent implements OnInit {

  recipeFormGroup!: FormGroup;
  ingredientsFormGroup!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.recipeFormGroup = this._formBuilder.group({
      recipeName: ['Salade de riz', Validators.required],
    });

    this.ingredientsFormGroup = this._formBuilder.group({
      ingredientList: this._formBuilder.array([
        [new Ingredient('Tomate', 1)],
        [new Ingredient('Riz', 1)],
        [new Ingredient('Salade', 1)],
        [new Ingredient('Maïs', 1)],
      ]),
    });
  }

  get ingredientList(): FormArray {
    return this.ingredientsFormGroup.get('ingredientList') as FormArray;
  }

  openAddIngredientDialog(): void {
    const dialogRef = this.dialog.open(AddIngredientDialogComponent, {});

    dialogRef.afterClosed().subscribe((newIngredient: Ingredient) => {
      console.log(newIngredient);

      this.ingredientList.push(new FormControl(newIngredient));
    });
  }


}
