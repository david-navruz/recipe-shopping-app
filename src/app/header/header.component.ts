import { Component, OnDestroy, OnInit } from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService, private authService:AuthService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user; // if there is a user, it will be true
      console.log(!user);
      console.log(!!user);
    })
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }


}
