import { Component, OnInit } from '@angular/core';

import { Perro } from '../perro';
import { PerroService } from '../perro.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})

export class PerrosComponent implements OnInit {
  perros: Perro[] = [];

  constructor(private perroService: PerroService,) { }

  ngOnInit() {
    this.getPerros();
  }

  getPerros(): void {
    this.perroService.getPerros()
        .subscribe(perros => this.perros = perros);
  }
}