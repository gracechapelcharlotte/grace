import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibleComponent } from './bible.component';
import { BibleService } from './bible.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BibleComponent],
  providers: [BibleService],
  exports: [BibleComponent]
})
export class BibleModule { }
