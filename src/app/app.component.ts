import { Component } from '@angular/core';
import { MenComponent } from "./Components/Men/Men.component";
import { WomenComponent } from "./Components/Women/Women.component";
import { ProfileComponent } from "./profile/Profile/Profile.component";
import { HomeComponent } from "./Components/Home/Home.component";
import { LoginComponent } from "./Components/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'asos';
}
