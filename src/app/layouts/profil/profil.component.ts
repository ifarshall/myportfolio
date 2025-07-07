import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements AfterViewInit {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedSection', { static: true }) typedSection!: ElementRef;
  private typed?: Typed;
  private typedStarted = false;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.typedStarted) {
          this.typedStarted = true;
          this.startTyping();
        }
      },
      { threshold: 0.3 } // Trigger saat 30% section masuk viewport
    );

    observer.observe(this.typedSection.nativeElement);
  }

  startTyping(): void {
    this.typed = new Typed(this.typedElement.nativeElement, {
      strings: [
        `I'm a passionate developer with a strong interest in frontend technologies. My love for IT started early, inspired by my family's background and years spent growing up around computers—from Windows 95 to modern frameworks.
        What began as a fascination with games eventually led me to the world of programming. Now, I work as a frontend developer on core national systems, with a focus on clean design, performance, and user experience.
        Outside of coding, I enjoy gaming, Japanese culture, and watching anime. These passions influence my creativity and help me think beyond just lines of code.`
      ],
      typeSpeed: 2,
      backSpeed: 0,
      loop: false,
      showCursor: false,
      smartBackspace: false,
      fadeOut: false,
      autoInsertCss: true
    });
  }
}
