import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Perro } from './perro';
import { PERROS } from './mock-perros';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class PerroService {

  constructor(private messageService: MessageService) { }

  getPerros(): Observable<Perro[]> {
    const perros = of(PERROS);
    this.messageService.add('');
    return perros;
  }
  getPerro(id: number): Observable<Perro> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const perro = PERROS.find(h => h.id === id)!;
    this.messageService.add(`Perro votado:  id=${id}`);
    return of(perro);
  }
}

