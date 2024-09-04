import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrl: './book-filter.component.css',
})
export class BookFilterComponent {
  constructor(private router: Router) {}

  onAuthorSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    this.router.navigate([], {
      queryParams: { authorId: selectedValue },
      queryParamsHandling: 'merge',
    });
  }
}
