import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-wildlife',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './wildlife.component.html',
  styleUrl: './wildlife.component.scss'
})
export class WildlifeComponent {
  wildlife = [
    {
      id: 1,
      name: 'African Lion',
      description: 'The iconic King of the Jungle, found in Maasai Mara.',
      imageUrl: 'kws/lion.jpg'
    },
    {
      id: 2,
      name: 'African Elephant',
      description: 'Largest land animal, roaming Amboseli with majestic herds.',
      imageUrl: 'kws/elephant.jpg'
    },
    {
      id: 3,
      name: 'Cheetah',
      description: 'Fastest land animal, often seen sprinting across the savannah.',
      imageUrl: 'kws/cheetah.jpg'
    },
    {
      id: 4,
      name: 'African Buffalo',
      description: 'Large and powerful, often found in herds in Tsavo.',
      imageUrl: 'kws/buffalo.webp'
    },
    {
      id: 5,
      name: 'Giraffe',
      description: 'Tallest land animal, known for its long neck and unique patterns.',
      imageUrl: 'kws/giraffe.jpg'
    },
    {
      id: 6,
      name: 'Zebra',
      description: 'Known for its black and white stripes, often seen in herds.',
      imageUrl: 'kws/zebra.jpg'
    },
    {
      id: 7,
      name: 'Rhinoceros',
      description: 'Endangered species, often found in Lake Nakuru National Park.',
      imageUrl: 'https://images.unsplash.com/photo-1593428578148-1ebd9f88e7f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      name: 'Leopard',
      description: 'Solitary and elusive, often seen resting on tree branches.',
      imageUrl: 'https://images.unsplash.com/photo-1593428578148-1ebd9f88e7f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      name: 'Flamingo',
      description: 'Known for its pink color, often seen in Lake Nakuru.',
      imageUrl: 'https://images.unsplash.com/photo-1593428578148-1ebd9f88e7f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 10,
      name: 'Hyena',
      description: 'Known for its scavenging behavior and unique vocalizations.',
      imageUrl: 'https://images.unsplash.com/photo-1593428578148-1ebd9f88e7f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 11,
      name: 'Wildebeest',
      description: 'Famous for the Great Migration in Maasai Mara.',
      imageUrl: 'https://images.unsplash.com/photo-1593428578148-1ebd9f88e7f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 12,
      name: 'Ostrich',
      description: 'Largest bird, known for its speed and unique appearance.',
      imageUrl: 'https://images.unsplash.com/photo-1593428578148-1ebd9f88e7f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 13,
      name: 'African Wild Dog',
      description: 'Endangered species known for its pack behavior and hunting skills.',
      imageUrl: 'https://images.unsplash.com/photo-1593428578148-1ebd9f88e7f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 14,
      name: 'Bongo',
      description: 'Rare forest antelope, often found in Aberdare National Park.',
      imageUrl: 'https://images.unsplash.com/photo-1593428578148-1ebd9f88e7f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 15,
      name: 'Colobus Monkey',
      description: 'Unique primate known for its black and white fur, found in forests.',
      imageUrl: 'https://images.unsplash.com/photo-1593428578148-1ebd9f88e7f3?auto=format&fit=crop&w=800&q=80'
    }
    // Add more wildlife species as needed  
  ];
}
