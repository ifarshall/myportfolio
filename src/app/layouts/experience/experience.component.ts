import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { Experience } from './experience.model';
import { ExperienceService } from './experience.service';
import { ImageModule } from 'primeng/image';
import { PopoverModule } from 'primeng/popover';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-experience',
  imports: [CommonModule,FormsModule,TableModule,ImageModule, PopoverModule, ButtonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {

  exps!: Experience[];

    constructor(private expService: ExperienceService) {}

    ngOnInit() {
        this.expService.getExperiences().then((data) => {
            this.exps = data;
        });
    }
}
