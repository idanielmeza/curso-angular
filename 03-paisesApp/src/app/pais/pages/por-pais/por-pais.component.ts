import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[]  = [];

  constructor(private paisService: PaisService){}

  buscar(termino: string){
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarPais(this.termino)
      .subscribe({
            next: (resp) => {
              console.log(resp)
              this.paises = resp;

            },
            error: (err) => {  
              this.hayError = true;
              this.paises = [];
            }
      });
 
  }

  sugerencias(termino: string){
    this.hayError = false;
    //TODO: crear sugerencias
  }
}
