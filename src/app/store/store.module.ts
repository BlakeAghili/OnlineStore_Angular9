import {FormsModule, NgModel} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {StoreComponent} from './store.component';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [StoreComponent],
  exports: [StoreComponent]
})
export class StoreModule { }
