import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { BookListService } from '../../services/book-list.service';
import { BookInterface } from '../../../shared/types/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  private selectedAuthorId: string | null = null;
  private selectedCountry: string | null = null;

  books$!: Observable<BookInterface[]>;

  constructor(
    private route: ActivatedRoute,
    private bookListService: BookListService
  ) {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners() {
    this.route.queryParams.subscribe((params) => {
      this.selectedAuthorId = params['authorId'] || null;
      this.selectedCountry = params['country'] || null;

      this.fetchData();
    });
  }

  fetchData(): void {
    this.books$ = this.bookListService.getAllBooks(
      this.selectedAuthorId,
      this.selectedCountry
    );
  }
}
