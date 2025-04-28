import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parks',
  imports: [RouterModule, CommonModule],
  templateUrl: './parks.component.html',
  styleUrl: './parks.component.scss'
})
export class ParksComponent {
  parks = [
    {
      id: 1,
      name: 'Maasai Mara',
      description: 'Famous for the Great Migration and Big Cats.',
      imageUrl: 'https://images.unsplash.com/photo-1605009181540-0ec9b45aef80?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Amboseli National Park',
      description: 'Known for large elephant herds and views of Mt. Kilimanjaro.',
      imageUrl: 'https://images.unsplash.com/photo-1582571591886-cf62fbbe8c05?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Tsavo National Park',
      description: 'One of the largest parks in Kenya, home to diverse wildlife.',
      imageUrl: 'https://images.unsplash.com/photo-1610173827042-09e8e33d7e6e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Lake Nakuru National Park',
      description: 'Famous for its flamingos and rhinos.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Samburu National Reserve',
      description: 'Known for unique wildlife species and stunning landscapes.',
      imageUrl: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Nairobi National Park',
      description: 'Unique park located just outside Nairobi, home to diverse wildlife.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      name: 'Aberdare National Park',
      description: 'Known for its stunning landscapes and diverse wildlife.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      name: 'Meru National Park',
      description: 'Less crowded park known for its diverse wildlife and landscapes.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      name: 'Kakamega Forest National Reserve',
      description: 'Home to unique flora and fauna, including rare species.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 10,
      name: 'Mount Kenya National Park',
      description: 'Home to Africa\'s second highest peak and diverse ecosystems.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 11,
      name: 'Hell\'s Gate National Park',
      description: 'Known for its stunning scenery and geothermal activity.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 12,
      name: 'Ol Pejeta Conservancy',
      description: 'Home to the last two northern white rhinos and diverse wildlife.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 13,
      name: 'Shimba Hills National Reserve',
      description: 'Known for its coastal rainforest and diverse wildlife.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 14,
      name: 'Chyulu Hills National Park',
      description: 'Known for its stunning landscapes and diverse wildlife.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 15,
      name: 'Kisite-Mpunguti Marine National Park',
      description: 'Known for its coral reefs and marine biodiversity.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 16,
      name: 'Watamu Marine National Park',
      description: 'Known for its coral reefs and marine biodiversity.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 17,
      name: 'Sibiloi National Park',
      description: 'Known for its unique landscapes and archaeological sites.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 18,
      name: 'Lake Bogoria National Reserve',
      description: 'Known for its hot springs and flamingos.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 19,
      name: 'Lake Elementaita',
      description: 'Known for its stunning scenery and diverse wildlife.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 20,
      name: 'Marsabit National Park',
      description: 'Known for its unique landscapes and diverse wildlife.',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
    }

  ];
}
