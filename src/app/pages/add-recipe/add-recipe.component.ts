import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.recipeFormGroup = this._formBuilder.group({
      recipeName: ['Salade de riz', Validators.required],
    });
    this.ingredientsFormGroup = this._formBuilder.group({
      ingredientList: this._formBuilder.array([
        ['Salade'],
        ['Riz'],
        ['Tomate'],
        ['Oeuf'],
        ['Vinaigre'],
        ['Maïs'],
        ['Graine'],
      ]),
    });
  }

  get ingredientList(): FormArray {
    return this.ingredientsFormGroup.get('ingredientList') as FormArray;
  }


}
