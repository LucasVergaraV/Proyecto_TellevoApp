import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  miViaje = JSON.parse(localStorage.getItem("viajes"))
  
  ultimoViaje = this.miViaje.at(-1); 

  // el sistema actual devuelve todos los valores del arreglo, debe devolver siempre el ultimo 

  data:any;
  field: string = ""
  constructor(private activeroute: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    public toastController: ToastController) { 
    };
  

  ngOnInit() {}
}