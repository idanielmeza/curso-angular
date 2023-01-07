import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];

  heroeBorrado:string | null = null;

  borrarHeroe():void{
    const heroe = this.heroes.pop();
    this.heroeBorrado = heroe || null;
  }
}
