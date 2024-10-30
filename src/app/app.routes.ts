import { Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { BlogComponent } from './components/blog/blog.component';
import { IncepComponent } from './components/incep/incep.component';
import { FooterComponent } from './components/footer/footer.component';
export const routes: Routes = [
    {path:'insurance',component:ServicesComponent},
    {path:'blog',component:BlogComponent},
    {path:'incep',component:IncepComponent},
    {path:'contact',component:FooterComponent}
];
