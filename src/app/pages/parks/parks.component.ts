import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { ParksService, Park } from '../../services/parks.service';

@Component({
  selector: 'app-parks',
  imports: [RouterModule, CommonModule],
  templateUrl: './parks.component.html',
  styleUrl: './parks.component.scss'
})
export class ParksComponent implements OnInit {
  parks: Park[] = [];

  constructor(private parksService: ParksService) {}

  ngOnInit(): void {
    this.parksService.getParks().subscribe({
      next: (data) => this.parks = data,
      error: (err) => console.error('Error fetching parks:', err)
    });
  }
}
