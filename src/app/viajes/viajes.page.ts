import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ViajeService } from '../services/viaje.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})

export class ViajesPage implements OnInit {
  constructor(
    public alertController: AlertController,
    public viajeService: ViajeService) { }
  
  async presentAlert(titulo:string,msg:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
