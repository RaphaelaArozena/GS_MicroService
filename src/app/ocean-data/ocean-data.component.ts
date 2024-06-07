import { Component, OnInit } from '@angular/core';
import { DataService, OceanData } from '../data.service';

@Component({
  selector: 'app-ocean-data',
  templateUrl: './ocean-data.component.html',
  styleUrls: ['./ocean-data.component.css']
})
export class OceanDataComponent implements OnInit {
  oceanData: OceanData[] = [];
  filters = {
    regiao: '',
    especie: '',
    statusConservacao: '',
    temperaturaAgua: null,
    ph: null,
    nivelPoluicao: ''
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getData(this.filters).subscribe(data => {
      this.oceanData = data;
    });
  }

  applyFilters() {
    this.loadData(); // Recarrega os dados com os filtros aplicados
  }
}
