import { LocationChangeListener } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {Geolocation,Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';

//import { AsyncLocalStorage } from 'async_hooks';
@Component({
  selector: 'app-credencial',
  templateUrl: './credencial.page.html',
  styleUrls: ['./credencial.page.scss'],
})


export class CredencialPage implements OnInit {
  validacion = JSON.parse(localStorage.getItem("validacion"))
  geoposicion: any;
  latitud: any;
  longitud: any;
  
  constructor(
    private router: Router,
    //private http: HttpClient , //Debo verificar la utilidad de esto 
    public alertController: AlertController,
    public toastController: ToastController,
    public geolocation: Geolocation,
    ) {}

  ngOnInit() {
  }

//-----------------------------------------------

ngAfterViewInit(){
  this.geolocationNative();
}

geolocationNative(){
  this.geolocation.getCurrentPosition().then((geposition: Geoposition) =>{
    console.log(geposition);
    this.latitud = geposition.coords.latitude;
    this.longitud = geposition.coords.longitude;
    var URL = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + this.latitud + '&lon=' + this.longitud

    fetch(URL, {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.geoposicion = json.display_name.substring(0, 100)
      }
      )
      .catch(err => console.log(err));
    });
}

//-----------------------------------------------
}
