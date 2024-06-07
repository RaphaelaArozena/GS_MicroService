import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { OceanData } from '../services/ocean-data.service';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, HttpClientModule, SharedModule],
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Região</mat-label>
      <input matInput placeholder="Região" [formControl]="regiaoControl">
    </mat-form-field>

    <mat-form-field appearance="outline">
      <mat-label>Espécie</mat-label>
      <input matInput placeholder="Espécie" [formControl]="especieControl">
    </mat-form-field>

    <button mat-raised-button color="primary" (click)="applyFilters()">Aplicar Filtros</button>
  `,
  styles: [`
    :host {
      display: flex;
      gap: 10px;
    }
  `]
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<Partial<OceanData>>(); // Correção aqui

  regiaoControl = new FormControl('');
  especieControl = new FormControl('');

  applyFilters() {
    const filters: Partial<OceanData> = {
      regiao: this.regiaoControl.value || undefined, // Use undefined para valores vazios
      especie: this.especieControl.value || undefined
    };

    this.filterChange.emit(filters);
  }
}
