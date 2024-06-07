import { Component, OnInit } from '@angular/core';
import { OceanDataService, OceanData } from './services/ocean-data.service';
import { FilterComponent } from './filter/filter.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { SharedModule } from './shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FilterComponent, TableComponent, HttpClientModule, SharedModule],
  template: `
    <app-filter (filterChange)="onFilterChange($event)"></app-filter>
    <app-table [data]="filteredData"></app-table>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filteredData: OceanData[] = [];

  constructor(private oceanDataService: OceanDataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(filters?: Partial<OceanData>) {
    this.oceanDataService.getFilteredData(filters || {}).subscribe(data => {
      this.filteredData = data;
    });
  }

  onFilterChange(filters: Partial<OceanData>) {
    this.loadData(filters);
  }
}
