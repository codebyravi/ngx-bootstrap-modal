import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxBootstrapModalModule } from '@nowzoo/ngx-bootstrap-modal';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxBootstrapModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
