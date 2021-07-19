import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mealprep-machine';
  maintitle = "Mealprep Machine";
  submit = "Submit";
  vegan = "Vegan";
  vegetarian = "Vegetarian";
  plantbased = "Plant Based";
  none = "None";
}

