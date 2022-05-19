import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent, pathMatch: 'full' },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: '**', component: RecipeListComponent }, // 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
