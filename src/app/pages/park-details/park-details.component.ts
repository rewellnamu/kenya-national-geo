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
        imageUrl: 'parks/mara.jpg',
        description: 'Famous for the Great Migration and Big Five.',
        highlights: 'Game drives, balloon safaris, Maasai culture'
      },
      {
        id: 2,
        name: 'Amboseli National Park',
        location: 'Kajiado County',
        imageUrl: 'parks/amboseli.jpg',
        description: 'Best views of Mount Kilimanjaro.',
        highlights: 'Elephant herds, Mount Kilimanjaro, wetlands'
      },
      {
        id: 3,
        name: 'Tsavo East National Park',
        location: 'Taita-Taveta County',
        imageUrl: 'parks/Tsavo.jpg',
        description: 'Kenyas oldest and largest national park.',
        highlights: 'Lava flows, red elephants, Galana River'
      },
      {
        id: 4,
        name: 'Tsavo West National Park',
        location: 'Taita-Taveta County',
        imageUrl: 'PARKS/Tsavo.jpg',
        description: 'Known for its scenic landscapes and wildlife.',
        highlights: 'Mzima Springs, wildlife, scenic views'
      },
      {
        id: 5,
        name: 'Nairobi National Park',
        location: 'Nairobi County',
        imageUrl: 'parks/Nairobi.jpg',
        description: 'Unique wildlife park near a city.',
        highlights: 'Big cats, rhinos, giraffes'
      },
      {
        id: 6,
        name: 'Samburu National Reserve',
        location: 'Samburu County',
        imageUrl: 'parks/samburu.jpg',
        description: 'Home to unique wildlife species.',
        highlights: 'Reticulated giraffe, Grevy zebra, wildlife'
      },
      {
        id: 7,
        name: 'Aberdare National Park',
        location: 'Nyandarua County',
        imageUrl: 'parks/aberdare.jpg',
        description: 'Mountainous park with diverse ecosystems.',
        highlights: 'Waterfalls, hiking, wildlife'
      },
      {
        id: 8,
        name: 'Meru National Park',
        location: 'Meru/Embu County',
        imageUrl: 'parks/meru.jpg',
        description: 'Remote park with rich biodiversity.',
        highlights: 'Wildlife, rivers, landscapes'
      },
      {
        id: 9,
        name: 'Ol Pejeta Conservancy',
        location: 'Laikipia County',
        imageUrl: 'parks/ol.jpg',
        description: 'Home to the last two northern white rhinos.',
        highlights: 'Conservation, wildlife, safaris'
      },
      {
        id: 10,
        name: 'Watamu Marine Park',
        location: 'Kilifi County',
        imageUrl: 'parks/Watamu.jpg',
        description: 'Marine park with coral reefs and marine life.',
        highlights: 'Snorkeling, diving, marine life'
      }

    ];
    

    this.park = mockParks.find(p => p.id === id);
  }
}
