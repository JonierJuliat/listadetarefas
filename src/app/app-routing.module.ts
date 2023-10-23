import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages 
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  //o 'path', vai inicialiar a página principal onde estiver discriminado no caminho do path "HomeComponent"
  {path:"", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
