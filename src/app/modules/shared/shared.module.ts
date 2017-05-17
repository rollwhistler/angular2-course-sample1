import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MdCheckboxModule} from '@angular/material';
import {MdListModule} from '@angular/material';

// my components
import { InputSearchComponent } from './form/input-search/input-search.component';
import { GenericFilterComponent } from './form/generic-filter/generic-filter.component';
import { GenericListComponent } from './generic-list/generic-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdListModule
  ],
  declarations: [
    InputSearchComponent,
    GenericFilterComponent,
    GenericListComponent
  ],
  exports: [InputSearchComponent, GenericFilterComponent, GenericListComponent, BrowserAnimationsModule]
})
export class SharedModule { }
