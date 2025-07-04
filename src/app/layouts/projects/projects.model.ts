export interface Technology {
  name: string;
  type: 'Language' | 'Framework' | 'Database' | 'Reporting Tool' | 'Platform' | 'Library';
}


export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  image2: string;
  technologies: Technology[];
  client: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'CANCELLED';  // Bisa disesuaikan
  startDate: Date;
  endDate?: Date;
  url?: string;
}