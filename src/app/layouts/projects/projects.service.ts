import { Injectable } from '@angular/core';
import { Project } from './projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects(): Promise<Project[]> {
    return Promise.resolve([
      {
        id: '1',
        name: 'SAKTI',
        description: 'Aplikasi keuangan nasional yang digunakan satuan kerja untuk pengelolaan anggaran dan pelaporan keuangan.',
        client: 'Stakeholder DJPb & Kementerian/Lembaga',
        image: 'sakti-1.png',
        image2: 'sakti-2.png',
        roles: [
          { name: 'Full Stack Developer', type: 'success' },
          { name: 'Git & Deployment', type: 'warn' }
        ],
        technologies: [
          { name: 'Angular', type: 'Framework' },
          { name: 'Java', type: 'Language' },
          { name: 'Gitlab On Premise', type: 'Platform' }
        ],
        status: 'IN_PROGRESS',
        startDate: new Date('2020-01-30'),
        rating: 4
      },
      {
        id: '5',
        name: 'MyIntress',
        description: 'Aplikasi integrasi data antara SAKTI dan SPAN untuk mendukung pelaporan keuangan yang lebih simple.',
        client: 'Stakeholder DJPb & Kementerian/Lembaga',
        image: 'myintress-1.png',
        image2: 'myintress-2.png',
        roles: [
          { name: 'Full Stack Developer', type: 'success' },
          { name: 'Git & Deployment', type: 'warn' }
        ],
        technologies: [
          { name: 'Angular', type: 'Framework' },
          { name: 'Javascript', type: 'Language' },
          { name: 'Python', type: 'Language' },
          { name: 'Github', type: 'Platform' }
        ],
        status: 'IN_PROGRESS',
        startDate: new Date('2024-09-17'),
        rating: 5
      },
      {
        id: '2',
        name: 'Monsakti',
        description: 'Aplikasi monitoring untuk memantau aktivitas dan data keuangan dari SAKTI.',
        client: 'Stakeholder DJPb & Kementerian/Lembaga',
        image: 'monsakti-1.png',
        image2: 'monsakti-2.png',
        roles: [
          { name: 'Frontend Developer', type: 'info' },
        ],
        technologies: [
          { name: 'PHP', type: 'Language' },
          { name: 'Javascript', type: 'Language' },
          { name: 'Github', type: 'Platform' },
        ],
        status: 'COMPLETED',
        startDate: new Date('2023-03-15'),
        endDate: new Date('2023-08-01'),
        rating: 5
      },
      {
        id: '6',
        name: 'Impact',
        description: 'Aplikasi inovasi untuk manajemen aset, SDM TIK, dan inisiatif internal DJPb.',
        client: 'Internal SITP DJPb',
        image: 'impact-1.png',
        image2: 'impact-2.png',
        roles: [
          { name: 'New Developer', type: 'danger' },
        ],
        technologies: [
          { name: 'Angular', type: 'Framework' },
          { name: 'Java', type: 'Language' },
          { name: 'Gitlab', type: 'Platform' },
          { name: 'Government', type: 'Platform' },
        ],
        status: 'IN_PROGRESS',
        startDate: new Date('2025-06-02'),
        rating: 5
      },
      {
        id: '3',
        name: 'Kantin Tresury',
        description: 'Aplikasi informasi menu harian untuk kantin DJPb.',
        client: 'Kantin Perbendaharaan',
        image: 'kantintreasury-1.png',
        image2: 'kantintreasury-2.png',
        roles: [
          { name: 'Full Stack Developer', type: 'success' },
          { name: 'Git & Deployment', type: 'warn' }
        ],
        technologies: [
          { name: 'HTML', type: 'Language' },
          { name: 'CSS', type: 'Language' },
          { name: 'Netlify', type: 'Platform' },
          { name: 'Github', type: 'Platform' }
        ],
        status: 'COMPLETED',
        startDate: new Date('2024-02-29'),
        endDate: new Date('2025-03-18'),
        rating: 5
      },
      {
        id: '4',
        name: 'IKU Calculator',
        description: 'Aplikasi internal untuk menghitung indikator kinerja pegawai.',
        client: 'Inisiatif Internal DJPb',
        image: 'ikuchecker-1.png',
        image2: 'ikuchecker-2.png',
        roles: [
          { name: 'Full Stack Developer', type: 'success' },
          { name: 'Git & Deployment', type: 'warn' }
        ],
        technologies: [
          { name: 'HTML', type: 'Language' },
          { name: 'CSS', type: 'Language' },
          { name: 'Netlify', type: 'Platform' },
          { name: 'Github', type: 'Platform' }
        ],
        status: 'COMPLETED',
        startDate: new Date('2024-02-02'),
        endDate: new Date('2025-03-04'),
        rating: 5
      },
    ]);
  }

}
