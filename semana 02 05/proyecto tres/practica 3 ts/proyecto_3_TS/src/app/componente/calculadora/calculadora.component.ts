import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  titulo="Mi Calculadora"
  num1!: number;
  num2!: number;
  resultado!: number;

  mensaje_ok:any;
  mensaje_error:any;

  constructor() { }

  ngOnInit(): void {
  }

  sumar(){
    if(this.num1==null){
      this.mensaje_error="Espera, te falta digitar el numero 1"
    }

    else if(this.num2==null){
      this.mensaje_error="Espera, te falta digitar el numero 2"
    }

    else{
      this.resultado= this.num1+this.num2
      this.mensaje_ok="La suma fue correcta"
    }
    
  }

  restar(){
    this.resultado= this.num1-this.num2
  }

  multiplicar(){
    this.resultado= this.num1*this.num2
  }

  dividir(){
    this.resultado= this.num1/this.num2
  }





}
