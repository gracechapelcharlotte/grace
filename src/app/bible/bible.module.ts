import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibleComponent } from './bible.component';
import { BibleService } from './bible.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [BibleComponent],
  providers: [BibleService],
  exports: [BibleComponent]
})
export class BibleModule { }
