import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Cheese Pizza', 'How to make a cheese pizza',
              'https://www.bettybossi.ch/rdbimg/bb_itku120801_0243a/bb_itku120801_0243a_r01_v005_x0010.jpg'
              ),
    new Recipe('Chicken Pizza', 'How to make a chicken pizza',
                  'https://www.bettybossi.ch/rdbimg/bb_itku120801_0243a/bb_itku120801_0243a_r01_v005_x0010.jpg'
                  ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
