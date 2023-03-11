import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { PageEvent } from'@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pages: number = 1;
  datosApi!:any;

  constructor(public apiService:ApiService) { }

  ngOnInit(): void {
    this.obtenerDatosApi();
  }

  obtenerDatosApi(){
    this.apiService.obtenerDatos()
    .subscribe(res =>
    this.datosApi = res,
    err=>console.log(err))
  }

  pruebaEvento(e:any){
    e.target
    //alert("El actor se llama: " + e)
    Swal.fire(
      'El actor se llama: '+e,
    )
  }

}
