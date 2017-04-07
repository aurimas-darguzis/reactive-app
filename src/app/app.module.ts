import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2RestAppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetDetailComponent } from './widgets/widget-detail/widget-detail.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { ItemsService, items, UsersService, users, WidgetsService, widgets, RecipesService, recipes, HomeService } from './shared';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    UsersComponent,
    UserDetailComponent,
    UsersListComponent,
    WidgetsComponent,
    WidgetDetailComponent,
    WidgetsListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2RestAppRoutingModule,
    StoreModule.provideStore( { items, users, widgets, recipes })

  ],
  providers: [ ItemsService, UsersService, WidgetsService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
