import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestriccionHorarioGuard implements CanActivate {
  constructor(private router:Router,public alertController: AlertController, public toastController: ToastController){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    // Obtenemos la hora actual
    const hora = new Date().getHours();
    console.log(hora);
    
    if (hora >= 23 ) {
      if(hora <= 8 ) {
        this.presentAlert("Fuera del horario de servicio","Servicio disponible entre las 08:00 a las 00:00")
        return false;
      }
    }
    else{
      // Si devolvemos TRUE si se permitirá el acceso.
    return true;
    }

    
 }
  


 //Alertas
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
