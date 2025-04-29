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

    const mockParks = [
      {
        id: 1,
        name: 'Maasai Mara National Reserve',
        location: 'Narok County',
        imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa7023?auto=format&fit=crop&w=800&q=80',
        description: 'Famous for the Great Migration and Big Five.',
        highlights: 'Game drives, balloon safaris, Maasai culture'
      },
      {
        id: 2,
        name: 'Amboseli National Park',
        location: 'Kajiado County',
        imageUrl: 'https://images.unsplash.com/photo-1550948390-6d622d14f94b?auto=format&fit=crop&w=800&q=80',
        description: 'Best views of Mount Kilimanjaro.',
        highlights: 'Elephant herds, Mount Kilimanjaro, wetlands'
      },
      {
        id: 3,
        name: 'Tsavo East National Park',
        location: 'Taita-Taveta County',
        imageUrl: 'https://images.unsplash.com/photo-1591097021575-0173c36144f7?auto=format&fit=crop&w=800&q=80',
        description: 'Kenya’s oldest and largest national park.',
        highlights: 'Lava flows, red elephants, Galana River'
      }
    ];
    

    this.park = mockParks.find(p => p.id === id);
  }
}
