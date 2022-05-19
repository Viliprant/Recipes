import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  OnAdd() {
    this.router.navigate(["/add-recipe"]);
  }

}
