import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrl: './book-filter.component.css',
})
export class BookFilterComponent implements OnInit {
  filterForm = new FormGroup({
    author: new FormControl(''),
    country: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filterForm.valueChanges.subscribe((formValues) => {
      const queryParams: Params = {};

      if (formValues.author) {
        queryParams['authorId'] = formValues.author;
      }

      if (formValues.country) {
        queryParams['country'] = formValues.country;
      }

      this.router.navigate([], {
        queryParams,
        queryParamsHandling: 'merge',
      });
    });
  }
}
