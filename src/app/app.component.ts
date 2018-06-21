import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Tab: string = 'recipes';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyC4YDY8ArVUX84K1fu2Kqo2jsRQ1aeyiiA",
      authDomain: "ng-recipe-book-8b849.firebaseapp.com"
    });
  }
  
  chosenTab(chosenTab: string){
    this.Tab = chosenTab;
  }

}
