import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Credencial', url: '/credencial', icon: 'person' },
    { title: 'Crear viaje', url: '/home', icon: 'car' },
    { title: 'Buscar viaje', url: '/viajes', icon: 'search' },
    
  ];
  public labels = [];
  constructor() {}
}
