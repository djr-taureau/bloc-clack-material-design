import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { TopNavComponent } from '../../top-nav/top-nav.component';
import { SideNavComponent } from '../../side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    TopNavComponent,
    SideNavComponent,
],
  exports: [
    TopNavComponent,
    SideNavComponent,
  ]
})
export class UiModule { }
