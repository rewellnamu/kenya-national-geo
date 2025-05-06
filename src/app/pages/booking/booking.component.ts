import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  booking = {
    name: '',
    email: '',
    park_id: 1,
    date: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private bookingService: BookingsService) {}

  submitBooking() {
    this.successMessage = '';
    this.errorMessage = '';

    this.bookingService.createBooking(this.booking).subscribe({
      next: (res) => {
        this.successMessage = 'Booking submitted successfully!';
        this.booking = { name: '', email: '', park_id: 1, date: '' };
      },
      error: (err) => {
        this.errorMessage = 'Failed to submit booking. Please try again.';
        console.error(err);
      }
    });
  }
}
