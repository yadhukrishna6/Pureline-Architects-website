import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { HomeComponent } from './view/home/home.component';
import { AboutUsComponent } from './view/about-us/about-us.component';
import { OurServiceComponent } from './view/our-service/our-service.component';
import { OurProjectsComponent } from './view/our-projects/our-projects.component';
import { OurApproachComponent } from './view/our-approach/our-approach.component';
import { TestimonialsComponent } from './view/testimonials/testimonials.component';
import { CarouselModule } from 'primeng/carousel';
import { CardSectionComponent } from './view/card-section/card-section.component';
import { FooterComponent } from './view/footer/footer.component';
import { ContactUsComponent } from './view/contact-us/contact-us.component';
import { ProjectMasterComponent } from './view/project-master/project-master.component';
import { ProjectDetailComponent } from './view/project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    OurServiceComponent,
    OurProjectsComponent,
    OurApproachComponent,
    TestimonialsComponent,
    CardSectionComponent,
    FooterComponent,
    ContactUsComponent,
    ProjectMasterComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
