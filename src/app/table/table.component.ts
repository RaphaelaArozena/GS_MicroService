import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { OceanData } from '../services/ocean-data.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared.module';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, HttpClientModule, SharedModule],
  template: `
    <table mat-table [dataSource]="data" class="mat-elevation-z8">
      <ng-container matColumnDef="regiao">
        <th mat-header-cell *matHeaderCellDef>Região</th>
        <td mat-cell *matCellDef="let element">{{ element.regiao }}</td>


      <ng-container matColumnDef="especie">
        <th mat-header-cell *matHeaderCellDef>Espécie</th>
        <td mat-cell *matCellDef="let element">{{ element.especie }}</td>
   

  

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
   
  `
})
export class TableComponent {
  @Input() data: OceanData[] = [];
  displayedColumns: string[] = ['regiao', 'especie']; // Colunas a serem exibidas
}
