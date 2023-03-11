import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component implements OnInit {

public titulo  = "Componenete 2";
public nombrePrueba = "Oscar"
public consolas:any
public consolas2 =
[
  {
  marca:"Soni",
  anio:"2000",
  precio: 600
  },

  {
  marca:"ps4",
  anio:"2002",
  precio: 700
    },
  {
  marca:"wii",
  anio:"2008",
  precio: 400
  },
];
public anioLanzamiento = new Date();
public precio = 200;

  constructor() { }


  
  ngOnInit(): void {
    this.carga()
  }
carga(){
  setTimeout(()=>{
    this.consolas =
    [
      {
      marca:"Xbox",
      anio:"2006",
      precio: 500
      },
    
      {
      marca:"ps5",
      anio:"2004",
      precio: 500
        },
      {
      marca:"nintendo",
      anio:"1990",
      precio: 500
      },
    ];
  },3000);
}
}
