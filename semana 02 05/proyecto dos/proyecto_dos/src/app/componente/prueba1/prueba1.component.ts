import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.css']
})
export class Prueba1Component implements OnInit {

  public nombre="Oscar Vasquez";
  public edad=29;

  public pasatiempo=["jugar","leer","dormir"];

  
  constructor() { }

  ngOnInit(): void {
  }


  receso(){
    alert("Esperen un ratico ya casi salimos al receso")
  }

}
