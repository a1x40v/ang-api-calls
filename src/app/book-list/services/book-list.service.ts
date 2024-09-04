import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { BookInterface } from '../../shared/types/book.interface';

@Injectable()
export class BookListService {
  constructor(private httpClient: HttpClient) {}

  getAllBooks(authorId: string | null): Observable<BookInterface[]> {
    let url = `${environment.apiUrl}/books`;

    if (authorId !== null) {
      url = `${url}?authorId=${authorId}`;
    }

    return this.httpClient.get<BookInterface[]>(url);
  }
}
