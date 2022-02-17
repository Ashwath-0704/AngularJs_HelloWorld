/**
 * Import the BrowserModule from @angular/platform-browser.       
 */
import { BrowserModule } from '@angular/platform-browser';
/**
 @NgModule({}) 
 */
import { NgModule } from '@angular/core';
/**
 * The main routing module for the application.       
 * @module AppRoutingModule       
 */
import { AppRoutingModule } from './app-routing.module';
/**
 * The main entry point for the application.           
 * @param {string} code - the code to format                     
 * @returns None           
 */
import { AppComponent } from './app.component';
/**
 * Import the FormsModule into the app.           
 */
import { FormsModule } from '@angular/forms';

/**
 * The main Angular module for the application.           
 * @param {BrowserModule} BrowserModule - The Angular browser module.           
 * @param {AppRoutingModule} AppRoutingModule - The Angular routing module.           
 * @param {FormsModule} FormsModule - The Angular forms module.           
 * @param {NgModule} NgModule - The Angular module decorator.           
 * @param {AppComponent} AppComponent - The main Angular component.           
 * @returns None           
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
