import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Perro } from '../perro';
import { PerroService } from '../perro.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-perro-detail',
  templateUrl: './perro-detail.component.html',
  styleUrls: ['./perro-detail.component.css']
})
export class PerroDetailComponent implements OnInit {

  @Input() perro: Perro | undefined;

  constructor(
    private route: ActivatedRoute,
    private perroService: PerroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPerro();
  }
  getPerro(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.perroService.getPerro(id)
      .subscribe(perro => this.perro = perro);
  }

  goBack(): void {
    this.location.back();
  }

}

