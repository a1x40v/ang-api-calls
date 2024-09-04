import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import queryString from 'query-string';

import { environment } from '../../../environments/environment';
import { BookInterface } from '../../shared/types/book.interface';

@Injectable()
export class BookListService {
  constructor(private httpClient: HttpClient) {}

  getAllBooks(
    authorId: string | null,
    country: string | null
  ): Observable<BookInterface[]> {
    const queryParams: { [key: string]: string } = {};

    if (authorId !== null) {
      queryParams['authorId'] = authorId;
    }

    if (country !== null) {
      queryParams['country'] = country;
    }

    const stringifiedParams = queryString.stringify(queryParams);

    const url = `${environment.apiUrl}/books?${stringifiedParams}`;

    return this.httpClient.get<BookInterface[]>(url);
  }
}
