import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[]  = [];

  constructor(private paisService: PaisService){}

  buscar(termino: string){
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarCapital(this.termino)
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
