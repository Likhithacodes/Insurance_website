import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { IncepComponent } from './components/incep/incep.component';
import { ReviewComponent } from './components/review/review.component';
import { BlogComponent } from './components/blog/blog.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HeroComponent,FeaturesComponent,ServicesComponent,FooterComponent,IncepComponent,
    ReviewComponent,BlogComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'insurance';
}
