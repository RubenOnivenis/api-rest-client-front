import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface datosClientes {
  id?:number,
  nombre:string,
  apellido:string,
  email:string,
  createdAt?:Date
}

@Injectable({
  providedIn: 'root'
})

export class ApiRestService {

  API_URI = 'http://localhost:8080/api';

  constructor(
    private http:HttpClient
  ) { }

  //Te devuelve todos los clientes almacenados
  getClientes(){
    return this.http.get(`${this.API_URI}/clientes`);
  }
  
  //Te devuelve solo un cliente almacenado
  getCliente(id: number){
    return this.http.get(`${this.API_URI}/cliente/${id}`); //Tengo que pasarle el valor id del cliente para que me lo muestre
  }

  //Guardar un cliente
  guardarCliente(cliente: datosClientes){
    return this.http.post(`${this.API_URI}/clientes`, cliente);
  }

  //Eliminar cliente
  eliminarCliente(id: number){
    return this.http.delete(`${this.API_URI}/clientes/${id}`); //Me envía una petición al servidor, el servidor lo elimina y después me envía la respuesta
  }

  //Actualizar cliente
  actualizarCliente(cliente: datosClientes, id:number) {
    return this.http.put(`${this.API_URI}/clientes/${id}`, cliente); //Le decimos el cliente que deseamos actualizar con el id
  }
}
