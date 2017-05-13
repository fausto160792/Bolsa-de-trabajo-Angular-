import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',//Tambien se puede poner el html en este archivo****
  //en cuanto a los selectores tambien se pueden cusar como clases usando el .selector en un
  // div o lo que sea
  // y tambien como atributo poniendo [app-servers] entre corchetes
  templateUrl: './servers.component.html', //no es recomendado poner mucho codigo es este
  //styleUrls: ['./servers.component.css']//Tambien puedes escribir estilos en esta linea
  styleUrls: ['../app.component.css']
  //pero no es recomendable si son muchas lineas
}) ///Tambien se pueden usar varios archivos css
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
