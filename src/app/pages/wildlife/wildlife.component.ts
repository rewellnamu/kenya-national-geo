import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AnimalsService, Animal } from '../../services/animals.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-wildlife',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './wildlife.component.html',
  styleUrl: './wildlife.component.scss'
})
export class WildlifeComponent implements OnInit {
  animals: Animal[] = [];

  constructor(private animalsService: AnimalsService) {}

  ngOnInit(): void {
    this.animalsService.getAnimals().subscribe({
      next: (data) => this.animals = data,
      error: (err) => console.error('Error loading animals', err)
    });
  }
}
