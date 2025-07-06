import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import Typed from 'typed.js';


@Component({
  selector: 'app-hero',
  imports: [CommonModule,TooltipModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit {

  @ViewChild('typedNameEl', { static: false }) typedNameEl!: ElementRef;

  name = 'Ricaldi Farshall';

  showScrollHint: boolean = false;
  nameHover: boolean = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(this.showScrollHint){
      this.showScrollHint = false;
    }
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.showScrollHint = true;
    }, 10000);
  }

}
