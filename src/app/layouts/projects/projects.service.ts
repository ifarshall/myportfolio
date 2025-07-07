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
        description: 'A national financial application used by government work units for budget management and financial reporting.',
        client: 'Stakeholder DJPb & Kementerian/Lembaga',
        image: 'sakti-1.png',
        image2: 'sakti-2.png',
        roles: [
          { name: '👑 Lead Frontend Developer', type: 'info' },
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
        url: 'https://sakti.kemenkeu.go.id'
      },
      {
        id: '5',
        name: 'MyIntress',
        description: 'An integration platform between SAKTI and SPAN to support more streamlined financial reporting across agencies.',
        client: 'Stakeholder DJPb & Kementerian/Lembaga',
        image: 'myintress-1.png',
        image2: 'myintress-2.png',
        roles: [
          { name: '👑 Lead Frontend Developer', type: 'info' },
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
        url: 'https://myintress.kemenkeu.go.id'
      },
      {
        id: '2',
        name: 'Monsakti',
        description: 'A monitoring tool to track activities and financial data from the SAKTI platform.',
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
        url: 'https://monsakti.kemenkeu.go.id'
      },
      {
        id: '6',
        name: 'Impact',
        description: 'An innovation platform for asset management, ICT human resources, and internal initiatives within DJPb.',
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
      },
      {
        id: '3',
        name: 'Kantin Tresury',
        description: 'A daily menu information app for the DJPb office canteen.',
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
        url: 'https://kantintresuri.netlify.app/'
      },
      {
        id: '4',
        name: 'IKU Calculator',
        description: 'An internal tool for calculating employee performance indicators (KPI).',
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
        url: 'https://ikuchecker.netlify.app/'
      },
    ]);
  }

}
