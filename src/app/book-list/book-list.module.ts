import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BookListService } from './services/book-list.service';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFilterComponent } from './components/book-filter/book-filter.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
  },
];

@NgModule({
  declarations: [BookListComponent, BookFilterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [BookListService],
})
export class BookListModule {}
