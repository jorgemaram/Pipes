import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  nombre2: string = 'JoRGE MarTIN RAmirez'
  arreglo: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  porcentaje: number = 0.2451;
  salario: number = 123546.25;
  fecha: Date = new Date();
  activar: boolean = true;
  idioma: string = 'fr';
  videoURL: string = 'https://www.youtube.com/embed/mk4amZlPa4g'

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llegó la Data')
    }, 4500);
  });


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
