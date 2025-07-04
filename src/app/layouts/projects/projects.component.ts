import { Component, inject, signal } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectsService } from './projects.service';
import { Project } from './projects.model';

@Component({
  selector: 'app-projects',
  imports: [DataViewModule,Tag, ButtonModule,CommonModule,FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  layout = 'grid';

  isHovered: boolean = false;

  projects = signal<any>([]);

  options = ['list', 'grid'];

  projectService = inject(ProjectsService);

  hoveredIndex: number | null = null;

  ngOnInit() {
      this.projectService.getProjects().then((data) => {
          this.projects.set([...data.slice(0,12)]);
      });
  }

  getSeverity(project: Project): string | null {
    switch (project.status) {
      case 'COMPLETED':
        return 'text-green-400';
      case 'IN_PROGRESS':
        return 'text-orange-400';
      case 'CANCELLED':
        return 'text-red-400';
      default:
        return null;
    }
  }

  onProjectClick(project: Project){

  }
}
