import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  arreglo: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  porcentaje: number = 0.2451;
  salario: number = 123546.25;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 32,
    direccion: {
      calle: 'Pien',
      casa: 20
    }
  }

}
