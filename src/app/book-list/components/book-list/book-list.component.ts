import { Component, DestroyRef, OnInit } from '@angular/core';

import { BookListService } from '../../services/book-list.service';
import { BookInterface } from '../../../shared/types/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  books: BookInterface[] = [];

  constructor(
    private destroyRef: DestroyRef,
    private bookListService: BookListService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const sub = this.bookListService.getAllBooks().subscribe((books) => {
      this.books = books;
    });

    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
    });
  }
}
