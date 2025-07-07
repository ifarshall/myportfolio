import { Component, HostListener, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  imports: [
    ButtonModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    CommonModule,
    ProgressBarModule,
    TooltipModule,
    RippleModule,
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent implements OnInit {
  scrollProgress = 0;

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Project',
        command: () => this.scrollTo('projects')
      },
      {
        label: 'Certificate',
        command: () => this.scrollTo('experience')
      },
      {
        label: 'Journey',
        command: () => this.scrollTo('journey')
      },
      {
        label: 'Capability',
        command: () => this.scrollTo('skill')
      },
    ];
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -150;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = (scrollTop / docHeight) * 100;
  }

  reachByWa() {
    window.open('https://wa.link/gxjhqw', '_blank');
  }

  reachByIg(){
    window.open('http://instagram.com/ifarshall','_blank');
  }

  reachByGithub(){
    window.open('https://github.com/ifarshall','_blank');
  }
}
