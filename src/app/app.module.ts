import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableEditComponent } from './table-edit/table-edit.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialTableComponent } from './material-table/material-table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatFormField, MatFormFieldModule, MatInputModule, MatSelect, MatSelectModule, MatSortModule, MatTableModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableEditComponent,
    MaterialTableComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    NoopAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
