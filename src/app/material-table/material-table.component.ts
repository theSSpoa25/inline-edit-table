import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { DataSource } from '@angular/cdk/table';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  fav: string;;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', fav: "Yes" },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', fav: "" },
];


@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  onAddRow() {
    ELEMENT_DATA.push( { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', fav: "Yes" },)
    console.log(ELEMENT_DATA)
    this.dataSource.data = ELEMENT_DATA
  }

  onSubmit() {
    console.log(this.dataSource.data);
    
  }
}
