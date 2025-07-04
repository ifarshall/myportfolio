export type ExperienceType = 'Pendidikan' | 'Kerja' | 'Pelatihan';

export interface Experience {
  id: string;
  type: ExperienceType;
  institution: string;
  role: string;
  year: string;
  description?: string;
  image?: string;
}
