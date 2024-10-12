import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact/:id', component: ContactComponent },
    { path: 'about', component: AboutComponent, canActivate: [authGuard] }    

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {
    constructor(private router: Router) {} 

    navigateToContact() {
     this.router.navigate(['/contact/', 42]); 
    }
 }
 
