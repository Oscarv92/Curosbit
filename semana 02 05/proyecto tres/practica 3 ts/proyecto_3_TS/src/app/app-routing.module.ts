import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './componente/calculadora/calculadora.component';
import { Formulario1Component } from './componente/formulario1/formulario1.component';
import { CardComponent } from './componente/card/card.component';

const routes: Routes = [
  {path:"calculadora",component:CalculadoraComponent},
  {path:"formulario",component:Formulario1Component},
  {path:"card",component:CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
