import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './view/contact-us/contact-us.component';
import { HomeComponent } from './view/home/home.component';
import { ProjectDetailComponent } from './view/project-detail/project-detail.component';
import { ProjectMasterComponent } from './view/project-master/project-master.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
    { path: 'projects', component: ProjectMasterComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },

];
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0, 70], // adjust if navbar is fixed
  scrollPositionRestoration: 'enabled'
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
