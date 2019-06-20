import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  currentRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
              private recipesService: RecipesService,
              private router: Router,
              private alerCtrl: AlertController
              ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(para => {
      if (!para.has('recipeID')) {
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeID = para.get('recipeID');
      this.currentRecipe = this.recipesService.getRecipe(recipeID);
     });
  }

  onDeleteRecipe() {
    this.alerCtrl.create({
      header: 'Are your sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.currentRecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
