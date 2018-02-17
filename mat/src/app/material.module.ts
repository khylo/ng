import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { Observable } from 'rxjs/Rx';

@NgModule({
  imports: [MatButtonModule, Observable],
  exports: [MatButtonModule, Observable],
})
export class MaterialModule { }