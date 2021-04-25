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
    component: VegePageComponent,
    data: {
      animation: "vege-animation"
    }
  },
  {
    path: 'fruit',
    component: FruitPageComponent,
    data: {
      animation: "fruit-animation"
    }
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
