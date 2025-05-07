import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-park-details',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './park-details.component.html',
  styleUrl: './park-details.component.scss'
})
export class ParkDetailsComponent implements OnInit {
  park: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

      const mockParks = [];
    }
  }