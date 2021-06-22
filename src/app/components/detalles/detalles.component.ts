import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styles: []
})
export class DetallesComponent implements OnInit {

  cliente: any = {};

  constructor(
    private _clientesService:ApiRestService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente(){
    this._clientesService.getCliente(this.activatedRoute.snapshot.params.id)
      .subscribe(respuesta => {
        this.cliente = respuesta;
      });
  }

  modificarDatos(){
    
    this._clientesService.actualizarCliente(this.cliente, this.activatedRoute.snapshot.params.id)
      .subscribe(respuesta =>{
        respuesta="se realizo bien el cambio";
        console.log(respuesta);
        location.reload();
      },
        (err) => {
          err="ERROR";
          console.log(err);
        } 
      )
      
  }

}
