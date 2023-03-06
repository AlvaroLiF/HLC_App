import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevarecetaPageRoutingModule } from './nuevareceta-routing.module';

import { NuevarecetaPage } from './nuevareceta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevarecetaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NuevarecetaPage]
})
export class NuevarecetaPageModule {}
