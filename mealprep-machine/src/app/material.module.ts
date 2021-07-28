// material.module.ts
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';



import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '../../node_modules/@angular/material/datepicker';

@NgModule({
  imports: [
    MatDatepickerModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
  ],
  exports: [
    MatDatepickerModule
  ]
})

export class MaterialModule {}