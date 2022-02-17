import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/**
 * A list of all the routes that the app can navigate to.       
 * @type {Routes}       
 */
const routes: Routes = [];

/**
 * The main module for the application.           
 * @param {RouterModule} RouterModule - The router module for the application.                     
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/**
 * A class that defines the AppRoutingModule.       
 * @class AppRoutingModule       
 */
export class AppRoutingModule { }
