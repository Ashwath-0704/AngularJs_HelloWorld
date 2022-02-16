import { Component } from '@angular/core';

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

export class AppComponent {
  title = 'HelloWorld';
  imageURl="https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg";
  bridgelabzURL="https://www.bridgelabz.com/";

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
}
