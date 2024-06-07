import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule
import { SharedModule } from './shared.module';
import { FilterComponent } from './filter/filter.component'; // Importe os componentes standalone
import { TableComponent } from './table/table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientModule, SharedModule, FilterComponent, TableComponent, MatFormFieldModule, MatInputModule, MatButtonModule, BrowserAnimationsModule, MatTableModule, ReactiveFormsModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Removemos o teste para 'app.title' pois não existe mais.

  it('should have filter and table components', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-filter')).toBeTruthy();
    expect(compiled.querySelector('app-table')).toBeTruthy();
  });
});
