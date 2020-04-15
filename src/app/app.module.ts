import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LiveComponent } from './live/live.component';
import { BibleModule } from './bible/bible.module';

@NgModule({
  declarations: [
    AppComponent,
    LiveComponent
  ],
  imports: [
    BrowserModule,
    BibleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
