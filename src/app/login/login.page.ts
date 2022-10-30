import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router, 
    public toastController: ToastController
    ) {
      
      this.validacionLocalStorage()
    }

  ngOnInit() {
  }
// ------------------------------------------------
// Variables
// ------------------------------------------------
  user = {
    usuario: "",
    password: ""
  }

  alumno = {
        nombre:"Lucas",
        user:"luca.vergara",
        password:"hola123",
        carrera:"Analista y Programador",
        semestre:"IV semestre"
      }

  field: string = ""
// ------------------------------------------------
// Usuario creado para validar
  validacionLocalStorage(){
    localStorage.setItem("validacion",JSON.stringify( this.alumno ))
  }

// ------------------------------------------------

  IniciarSesionLocalStorage(){
    if (this.validateModel(this.user)){
      if (this.user.usuario == this.alumno.user){
        if (this.user.password == this.alumno.password){
          this.presentToast("Bienvenido")
          this.router.navigate(['/credencial']);
        }else{
          this.presentToast("La contraseña es incorrecta",5000)
        }
      }else{
        this.presentToast("El usuario '"+this.user.usuario+"' No existe",5000)
      }
    }
    else{
      this.presentToast("Falta ingresar "+this.field,5000)
    }
  }
// ------------------------------------------------
 

  // ValidateModel sirve para validar que se ingresa algo en los campos del html mediante su modelo
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

}

