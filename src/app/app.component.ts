import { Component, OnInit } from '@angular/core';

/**
 * The root component of the application.           
 * @param {string} selector - The selector for the component.           
 * @param {string} templateUrl - The URL of the template for the component.           
 * @param {string[]} styleUrls - The URLs of the stylesheets for the component.                     
 */
@Component({
  selector: 'NewApp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',]
})

export class AppComponent implements OnInit{
  
  title = 'HelloWorld';
  imageURl="https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg";
  bridgelabzURL="https://www.bridgelabz.com/";
  userName: string = "";
  nameError: string="";

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title="Hello from BridgesLabz.";
  }

  /**
   * A function that is called when the save button is clicked.           
   * @param {Event} $event - The click event.           
   * @returns None           
   */
  onClick($event){
    console.log("Save button is clicked!",$event);
    window.open(this.bridgelabzURL,"_blank");
  }

  /**
   * This function is called when the userName input changes.       
   * @param {Event} $event - the change event object       
   * @returns None       
   */
  onInput($event){
    console.log("Change event occurred!",$event);
    const userNameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    /**
     * Checks if the user name is valid.       
     * @param {string} userName - the user name to check       
     * @returns {boolean} - true if the user name is valid, false otherwise       
     */
    if (userNameRegex.test(this.userName)) {
        this.nameError=""
        return;
    }
    this.nameError="Name must consist of Initial Caps and min 3 Letter."
  }
}
