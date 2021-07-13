import { Component, OnInit } from '@angular/core';
import { Perro } from '../perro';
import { PerroService } from '../perro.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  perros: Perro[] = [];

  constructor(private perroService: PerroService) { }

  ngOnInit() {
    this.getPerros();
  }

  getPerros(): void {
    this.perroService.getPerros()
      .subscribe(perros => this.perros = perros.slice(1, 5));
  }
}