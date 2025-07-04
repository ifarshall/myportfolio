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
        role: 'Lulus',
        year: '2020',
        description: 'Online Academy Digital Talent Scholarship 2020 - Augmented Reality',
        image: '/augmented-dicoding.png'
      },
      {
        id: '6',
        type: 'Pelatihan',
        institution: 'Kominfo & DQLab',
        role: 'Lulus',
        year: '2021',
        description: 'Pelatihan Data Scientist Program Professional Academy - Digital Talent Scholarship',
        image: '/data-science-dqlab.png'
      },
      {
        id: '7',
        type: 'Pelatihan',
        institution: 'Kominfo & Skilvul',
        role: 'Lulus',
        year: '2021',
        description: 'Pelatihan "UI/UX Design (Team Project)" oleh Digitalent Kominfo',
        image: '/ui-ux-skilvul.png'
      },
      {
        id: '8',
        type: 'Pelatihan',
        institution: 'Kemenkeu',
        role: 'Lulus',
        year: '2021',
        description: 'Pelatihan Jarak Jauh Framework Angular',
        image: '/angular-fundamental.png'
      },
      {
        id: '9',
        type: 'Pelatihan',
        institution: 'Kemenkeu',
        role: 'Lulus - Terbaik Kedua',
        year: '2022',
        description: 'Pelatihan Jarak Jauh Java Fundamental',
        image: '/java-fundamental.png'
      },
      {
        id: '10',
        type: 'Pelatihan',
        institution: 'Kemenkeu',
        role: 'Lulus',
        year: '2022',
        description: 'Pelatihan Jarak Jauh Java Advance',
        image: '/java-advance.png'
      },
      {
        id: '14',
        type: 'Pelatihan',
        institution: 'Kominfo & Cisco',
        role: 'Lulus',
        year: '2022',
        description: 'Pelatihan Python pada Program Professional Academy Digitalent Kominfo',
        image: '/python-cisco.png'
      },
      {
        id: '11',
        type: 'Pelatihan',
        institution: 'Kemenkeu',
        role: 'Lulus',
        year: '2024',
        description: 'Pelatihan Treasury Data Analysis (Machine Learning)',
        image: '/machine-learning.png'
      },
      {
        id: '12',
        type: 'Pelatihan',
        institution: 'Kominfo & Alibaba',
        role: 'Lulus',
        year: '2024',
        description: 'Pelatihan Alibaba Big Data Professional Academy Digital Talent Scholarship 2024',
        image: '/alibaba-cloud.png'
      },
      {
        id: '13',
        type: 'Pelatihan',
        institution: 'Kemenkeu',
        role: 'Lulus - Terbaik Pertama',
        year: '2025',
        description: 'Pelatihan Angular 14'
      },
    ]);
  }
}
