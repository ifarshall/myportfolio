import { Injectable } from '@angular/core';
import { Experience } from './experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() {}

  getExperiences(): Promise<Experience[]> {
    return Promise.resolve([
      // {
      //   id: '4',
      //   type: 'Kerja',
      //   institution: 'Direktorat Sistem Informasi dan Teknologi Perbendaharaan (SITP) - Kemenkeu',
      //   role: 'Full Stack Developer',
      //   year: '2020 - Sekarang',
      //   description: 'Mulai belajar di tahun 2022, dan mendalami/fokus pada frontend dan GitOps hingga saat ini'
      // },
      // {
      //   id: '1',
      //   type: 'Pendidikan',
      //   institution: 'SMA Negeri 10 Tangerang',
      //   role: 'Pelajar',
      //   year: '2007 - 2010',
      //   description: 'Sudah tertarik dengan dunia IT dari TK, namun di SMA mendalami IT dari Operator Warnet'
      // },
      // {
      //   id: '2',
      //   type: 'Pendidikan',
      //   institution: 'Sekolah Tinggi Akuntansi Negara',
      //   role: 'D3 Akuntansi',
      //   year: '2010 - 2013',
      //   description: 'Ketertarikan dengan IT semakin meningkat karena senang bermain game Dota 2'
      // },
      // {
      //   id: '3',
      //   type: 'Kerja',
      //   institution: 'KPPN Tahuna',
      //   role: 'Pegawai',
      //   year: '2016 - 2017',
      //   description: 'Mencoba membuat inovasi aplikasi menggunakan script visual basic'
      // },
      // {
      //   id: '99',
      //   type: 'Pendidikan',
      //   institution: 'S1 Manajemen',
      //   role: 'Mahasiswa',
      //   year: '2021 - 2023',
      //   description: 'Saya merasa manajemen maupun akuntansi bukan hal yang menarik bagi saya'
      // },
      {
        id: '5',
        type: 'Pelatihan',
        institution: 'Kominfo & Dicoding',
        role: 'Graduate',
        year: '2020',
        description: 'Online Academy Digital Talent Scholarship 2020 - Augmented Reality',
        image: '/augmented-dicoding.png'
      },
      {
        id: '6',
        type: 'Pelatihan',
        institution: 'Kominfo & DQLab',
        role: 'Graduate',
        year: '2021',
        description: 'Training Data Scientist Program Professional Academy - Digital Talent Scholarship',
        image: '/data-science-dqlab.png'
      },
      {
        id: '7',
        type: 'Pelatihan',
        institution: 'Kominfo & Skilvul',
        role: 'Graduate',
        year: '2021',
        description: 'Training "UI/UX Design (Team Project)" By Digitalent Kominfo',
        image: '/ui-ux-skilvul.png'
      },
      {
        id: '8',
        type: 'Pelatihan',
        institution: 'Kemenkeu',
        role: 'Graduate',
        year: '2021',
        description: 'Online Course Framework Angular',
        image: '/angular-fundamental.png'
      },
      {
        id: '9',
        type: 'Pelatihan',
        institution: 'Kemenkeu',
        role: 'Graduate - Second Best',
        year: '2022',
        description: 'Online Course Java Fundamental',
        image: '/java-fundamental.png'
      },
      {
        id: '10',
        type: 'Pelatihan',
        institution: 'Kemenkeu',
        role: 'Graduate',
        year: '2022',
        description: 'Online Course Java Advance',
        image: '/java-advance.png'
      },
      {
        id: '14',
        type: 'Pelatihan',
        institution: 'Kominfo & Cisco',
        role: 'Graduate',
        year: '2022',
        description: 'Training Python on Program Professional Academy Digitalent Kominfo',
        image: '/python-cisco.png'
      },
      {
        id: '11',
        type: 'Pelatihan',
        institution: 'Kemenkeu',
        role: 'Graduate',
        year: '2024',
        description: 'Training Treasury Data Analysis (Machine Learning)',
        image: '/machine-learning.png'
      },
      {
        id: '12',
        type: 'Pelatihan',
        institution: 'Kominfo & Alibaba',
        role: 'Graduate',
        year: '2024',
        description: 'Training Alibaba Big Data Professional Academy Digital Talent Scholarship 2024',
        image: '/alibaba-cloud.png'
      },
      {
        id: '13',
        type: 'Pelatihan',
        institution: 'Kemenkeu',
        role: 'Graduate - Best of the best',
        year: '2025',
        description: 'Training Angular 14 by NQA Indonesia',
        image: '/angular-certificate.png'
      },
    ]);
  }
}
