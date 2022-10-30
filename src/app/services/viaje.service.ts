import { Time } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  public viajes: any[] = []; //almacenara los viajes
  constructor() { 
    this.cargarStorage();
  }

  crearViaje(salida: string, termino: string, pasajeros: string, horaSalida: string, monto: string){
    let ObjectoViaje = {
      Comienzo : salida,
      Final : termino,
      Npasajeros : pasajeros,
      Salida : horaSalida,
      Valor : monto
    }
    this.viajes.push(ObjectoViaje);
    this.guardarStorage();
  }

  guardarStorage(){
    let stringViajes = JSON.stringify(this.viajes)

    localStorage.setItem('viajes', stringViajes)
  }

  cargarStorage(){
    const listarStorage = localStorage.getItem('viajes');
    if (listarStorage == null){
      return this.viajes = [];
    }
    let ObjListar = JSON.parse(listarStorage)
    this.viajes = ObjListar;
  }
}
