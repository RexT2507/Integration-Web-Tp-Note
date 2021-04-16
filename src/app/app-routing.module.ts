import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { VegePageComponent } from './vege-page/vege-page.component';
import { FruitPageComponent } from './fruit-page/fruit-page.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/fruit',
    pathMatch: 'full'
  },
  {
    path: 'vegetable',
    component: VegePageComponent
  },
  {
    path: 'fruit',
    component: FruitPageComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
