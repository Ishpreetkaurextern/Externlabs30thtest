import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'externtest';
  arrow(){
    document.getElementById("qualityimg")?.scrollIntoView({behavior:'smooth'})
  }
}
