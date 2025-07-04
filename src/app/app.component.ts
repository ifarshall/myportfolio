import { Component, HostListener, OnInit } from '@angular/core';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { HeroComponent } from './layouts/hero/hero.component';
import { ProjectsComponent } from './layouts/projects/projects.component';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { ExperienceComponent } from './layouts/experience/experience.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ProfilComponent } from "./layouts/profil/profil.component";

@Component({
  selector: 'app-root',
  imports: [
    TopbarComponent,
    HeroComponent,
    CommonModule,
    ProjectsComponent,
    ExperienceComponent,
    AnimateOnScrollModule,
    TooltipModule,
    DividerModule,
    FooterComponent,
    ProfilComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
