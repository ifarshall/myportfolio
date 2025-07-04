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
        "Saya anak kedua dari tiga bersaudara. Lahir di Jakarta, 16 November 1992. Saya sudah menikah, dengan satu putri dan satu putra. Saya menyukai IT sejak kecil karena ayah saya adalah bagian dari tim IT. Saya tumbuh bersama komputer dari Windows 95 hingga sekarang. Awalnya suka karena game. Dota 2 jadi favorit saya. Sekarang saya bekerja di SITP Kementerian Keuangan sebagai developer untuk salah satu core sistem yaitu SAKTI. Fokus saya di modul Administrasi dan Penganggaran."
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
      smartBackspace: false,
      fadeOut: false,
      autoInsertCss: true
    });
  }
}
