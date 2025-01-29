import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-co2-table',
  imports: [
    MatLabel,
    MatFormField,
    MatTable,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './co2-table.component.html',
  styleUrl: './co2-table.component.css'
})
export class Co2TableComponent implements OnInit {

  displayedColumns: string[] = ['country', 'company', 'emissions'];

  dataSource = new MatTableDataSource(CO2_DATA);

  ngOnInit(): void {}

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

const CO2_DATA = [
  { country: 'Deutschland', company: 'BMW', emissions: 500000 },
  { country: 'USA', company: 'Tesla', emissions: 400000 },
  { country: 'China', company: 'Huawei', emissions: 700000 },
  { country: 'Frankreich', company: 'Renault', emissions: 300000 },
  { country: 'Japan', company: 'Toyota', emissions: 600000 }
];
