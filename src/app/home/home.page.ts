import { Component } from '@angular/core';
import { ActivatedRoute,NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ViajeService } from '../services/viaje.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  validacion = JSON.parse(localStorage.getItem("validacion"))

  viaje={
    salida:"",
    termino:"",
    pasajeros:"",
    horaSalida:"",
    monto:""
  }


  field: string = ""

  coords: any;

  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    public toastController: ToastController,
    public viajeService: ViajeService,
    ) 
    {
    
  }


  segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value
    this.router.navigate(['home/'+direction])
  }
// ---------------------------------- -----------------


// ---------------------------------------------------

  crearViaje() {
    if (this.validateModel(this.viaje)){
      this.presentToast("Viaje Creado",2000)
      this.viajeService.crearViaje(this.viaje.salida,this.viaje.termino,this.viaje.pasajeros,this.viaje.horaSalida,this.viaje.monto)
      this.router.navigate(['/viaje']) //redireccona al module de viaje creado
    }else{
      this.presentToast("Falta ingresar "+this.field,3000)
      
    }
  }
  
//ALERTAS
  validateModel(model: any) {
    //recorro todas las entradas que me entrega el Object entries y obtengo
    //su clave-valor
    for (var [key, value] of Object.entries(model)) {
      //verifico campo vacío
      if (value == "") {
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentToast(msg: string, duracion?: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duracion ? duracion : 2000
    });
    toast.present();
  }

  async presentAlert(titulo:string,msg:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
