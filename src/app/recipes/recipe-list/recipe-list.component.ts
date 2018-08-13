import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] =[
    new Recipe('Test Recipe','Food','https://www.goodfood.com.au/content/dam/images/h/0/f/a/q/i/image.related.wideLandscape.940x529.h0fa4n.png/1515456591895.jpg'),
    new Recipe('Test Food','Food 2','https://www.city.ac.uk/__data/assets/image/0005/352643/Tim-Lang-sustainable-diets-The-Conversation-thumb.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
