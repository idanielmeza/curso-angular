import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit{

  pais!: Pais;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    // this.activatedRoute.params
    //   .subscribe(params =>{
    //     this.paisService.getPais(params['id'])
    //       .subscribe(pais =>{
    //         console.log(pais);
    //       }
    //     )
    //   })

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPais(id)),
        tap(console.log)
      )
      .subscribe(pais => {
        this.pais = pais[0];
        console.log('this.pais', this.pais)
      })

  }

}
