import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './animal-details.component.html',
  styleUrl: './animal-details.component.scss'
})
export class AnimalDetailsComponent implements OnInit {
  animal: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Mock data for now; replace with a service later
    const mockAnimals = [
      {
        id: 1,
        name: 'African Lion',
        description: 'The iconic King of the Jungle.',
        imageUrl: 'https://images.unsplash.com/photo-1593428578148-1ebd9f88e7f3?auto=format&fit=crop&w=800&q=80',
        facts: 'Lions live in groups called prides.'
      },
      {
        id: 2,
        name: 'African Elephant',
        description: 'Largest land animal.',
        imageUrl: 'https://images.unsplash.com/photo-1604328698692-82a50c9fa409?auto=format&fit=crop&w=800&q=80',
        facts: 'Elephants have incredible memories.'
      },
      {
        id: 3,
        name: 'Cheetah',
        description: 'Fastest land animal.',
        imageUrl: 'https://images.unsplash.com/photo-1598387843048-758c23b196c2?auto=format&fit=crop&w=800&q=80',
        facts: 'Cheetahs can accelerate from 0 to 60mph in 3 seconds.'
      },
      {
        id: 4,
        name: 'Giraffe',
        description: 'Tallest land animal.',
        imageUrl: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80',
        facts: 'Giraffes have long necks to reach high leaves.'
      },
      {
        id: 5,
        name: 'Zebra',
        description: 'Known for their black and white stripes.',
        imageUrl: 'https://images.unsplash.com/photo-1593642633270-e1b3c2f6e4a0?auto=format&fit=crop&w=800&q=80',
        facts: 'No two zebras have the same stripe pattern.'
      },
      {
        id: 6,
        name: 'Hippopotamus',
        description: 'Large, mostly herbivorous mammal.',
        imageUrl: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80',
        facts: 'Hippos can run faster than humans on land.'
      },
      {
        id: 7,
        name: 'Rhinoceros',
        description: 'Large, thick-skinned herbivore.',
        imageUrl: 'https://images.unsplash.com/photo-1593642633270-e1b3c2f6e4a0?auto=format&fit=crop&w=800&q=80',
        facts: 'Rhinos have poor eyesight but a great sense of smell.'
      },
      {
        id: 8,
        name: 'Buffalo',
        description: 'Large bovine found in Africa.',
        imageUrl: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80',
        facts: 'Buffaloes are known for their strength and resilience.'
      },
      {
        id: 9,
        name: 'Leopard',
        description: 'Solitary big cat known for its agility.',
        imageUrl: 'https://images.unsplash.com/photo-1593642633270-e1b3c2f6e4a0?auto=format&fit=crop&w=800&q=80',
        facts: 'Leopards can carry prey twice their weight up a tree.'
      },
      {
        id: 10,
        name: 'Hyena',
        description: 'Known for their scavenging behavior.',
        imageUrl: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80',
        facts: 'Hyenas have a complex social structure.'
      }
    ];

    this.animal = mockAnimals.find(a => a.id === id);
  }
}
