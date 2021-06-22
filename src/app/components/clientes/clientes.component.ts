import { Component, Input, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {

  clientes: any [] = [];
  @Input() index!:number | undefined;

  constructor(
    private _clientesService: ApiRestService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getClientes(); //En vez de tener el código en el ngOnInit lo pontemos en getClientes
  }

  getClientes(){  //Este metodo realizará la labor de ngOnInit
    this._clientesService.getClientes()
    .subscribe( (clientes:any) => {
      this.clientes = clientes;
    })
  }

  ////////BORRAR

  borrarCliente(id: number){
    this._clientesService.eliminarCliente(id).subscribe(
      respuesta => {
       
        this.getClientes(); //llamamos de nuevo a la funcion para que se vuelva a realizar y el cliente se nos elimine sin que haya que refrescar la página
      }
    )
  }

}
