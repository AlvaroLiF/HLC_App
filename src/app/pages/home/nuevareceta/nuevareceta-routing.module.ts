import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevarecetaPage } from './nuevareceta.page';

const routes: Routes = [
  {
    path: '',
    component: NuevarecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevarecetaPageRoutingModule {}
