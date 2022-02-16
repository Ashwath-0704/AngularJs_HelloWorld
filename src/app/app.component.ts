import { Component } from '@angular/core';

@Component({
  selector: 'NewApp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',]
})

/**
 * The main component of the application.           
 */
export class AppComponent {
  title = 'HelloWorld';
  imageURl="https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg";
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title="Hello from BridgesLabz.";
  }
}
