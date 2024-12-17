import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DahabiayaComponent } from "./dahabiaya/dahabiaya.component";
import { FooterComponent } from "./footer/footer.component";
import { NileCruiseComponent } from "./nile-cruise/nile-cruise.component";
import { NotfoundComponent } from "./not-found/notfound.component";
import { AsyncPipe, NgIf } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from "./intro/intro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , AboutComponent, HomeComponent, NavbarComponent, DahabiayaComponent, FooterComponent, NileCruiseComponent, NotfoundComponent, NgIf, AsyncPipe, IntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent  {
  title = 'walton-app';

 
}
